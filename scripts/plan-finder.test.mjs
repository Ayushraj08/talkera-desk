import { test } from 'node:test';
import assert from 'node:assert';

function calculatePlan(M, channels = 2) {
  if (channels > 8 || M > 5000) {
    return { plan: 'Custom', cost: 0, isCustom: true };
  }
  const plans = [
    { name: 'Pay As You Go', channels: 2, cost: Math.max(95, 0.59 * M) },
    { name: 'Growth', channels: 3, cost: 383 + 0.50 * Math.max(0, M - 743) },
    { name: 'Pro', channels: 5, cost: 581 + 0.50 * Math.max(0, M - 1292) },
    { name: 'Expansion', channels: 8, cost: 950 + 0.41 * Math.max(0, M - 1994) }
  ];

  const eligible = plans.filter((p) => p.channels >= channels);
  let best = eligible[0];
  for (let i = 1; i < eligible.length; i++) {
    if (eligible[i].cost < best.cost) {
      best = eligible[i];
    }
  }
  return { plan: best.name, cost: Number(best.cost.toFixed(2)), isCustom: false };
}

function calculateMissed(missedPerDay, jobSize, profitPct, channels = 2) {
  const M = missedPerDay * 30 * 4;
  const planResult = calculatePlan(M, channels);
  const jobs = missedPerDay * 30 * 0.15;
  const revenue = jobs * jobSize;
  const profit = revenue * (profitPct / 100);
  const net = Number((profit - planResult.cost).toFixed(2));
  return {
    M,
    plan: planResult.plan,
    planCost: planResult.cost,
    jobs,
    revenue,
    profit,
    net
  };
}

// Test Case 1: (2/day, $200, 40%) -> plan Pay As You Go 141.60, net 578.40
test('Test Case 1: 2/day, $200, 40%', () => {
  const res = calculateMissed(2, 200, 40);
  assert.strictEqual(res.M, 240);
  assert.strictEqual(res.plan, 'Pay As You Go');
  assert.strictEqual(res.planCost, 141.60);
  assert.strictEqual(res.net, 578.40);
});

// Test Case 2: (6/day, $200, 30%) -> Growth 383.00, net 1237.00
test('Test Case 2: 6/day, $200, 30%', () => {
  const res = calculateMissed(6, 200, 30);
  assert.strictEqual(res.M, 720);
  assert.strictEqual(res.plan, 'Growth');
  assert.strictEqual(res.planCost, 383.00);
  assert.strictEqual(res.net, 1237.00);
});

// Test Case 3: (0.5/day, $200, 5%) -> Pay As You Go 95.00, net -72.50
test('Test Case 3: 0.5/day, $200, 5%', () => {
  const res = calculateMissed(0.5, 200, 5);
  assert.strictEqual(res.M, 60);
  assert.strictEqual(res.plan, 'Pay As You Go');
  assert.strictEqual(res.planCost, 95.00);
  assert.strictEqual(res.net, -72.50);
});

// Test Case 4: Switch points 649/650, 1139/1140, 2194/2195
test('Switch point 649 -> Pay As You Go, 650 -> Growth', () => {
  const res649 = calculatePlan(649, 2);
  const res650 = calculatePlan(650, 2);
  assert.strictEqual(res649.plan, 'Pay As You Go');
  assert.strictEqual(res649.cost, 382.91);
  assert.strictEqual(res650.plan, 'Growth');
  assert.strictEqual(res650.cost, 383.00);
});

test('Switch point 1139 -> Growth, 1140 -> Pro', () => {
  const res1139 = calculatePlan(1139, 2);
  const res1140 = calculatePlan(1140, 2);
  assert.strictEqual(res1139.plan, 'Growth');
  assert.strictEqual(res1139.cost, 581.00);
  // At 1140: Growth = 383 + 0.50*(1140 - 743) = 581.50; Pro = 581.00
  assert.strictEqual(res1140.plan, 'Pro');
  assert.strictEqual(res1140.cost, 581.00);
});

test('Switch point 2194 -> Pro, 2195 -> Expansion', () => {
  const res2194 = calculatePlan(2194, 2);
  const res2195 = calculatePlan(2195, 2);
  assert.strictEqual(res2194.plan, 'Pro');
  assert.strictEqual(res2194.cost, 1032.00);
  // At 2194: Pro = 581 + 0.50*(2194 - 1292) = 1032.00; Expansion = 950 + 0.41*(2194 - 1994) = 1032.00
  // At 2195: Pro = 581 + 0.50*(2195 - 1292) = 1032.50; Expansion = 950 + 0.41*(2195 - 1994) = 1032.41
  assert.strictEqual(res2195.plan, 'Expansion');
  assert.strictEqual(res2195.cost, 1032.41);
});

test('Custom boundary: > 5000 minutes or > 8 calls at once', () => {
  const res5001 = calculatePlan(5001, 2);
  const res9calls = calculatePlan(500, 9);
  assert.strictEqual(res5001.isCustom, true);
  assert.strictEqual(res5001.plan, 'Custom');
  assert.strictEqual(res9calls.isCustom, true);
  assert.strictEqual(res9calls.plan, 'Custom');
});
