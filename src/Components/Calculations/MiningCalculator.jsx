import { motion } from "framer-motion";
import React, { useState } from 'react';
import background1 from "../../assets/images/Background1.png";
import "../../styles/gradient.css";

export const MiningCalculator = () => {
  const [poolHashRate, setPoolHashRate] = useState('');
  const [dailyPoolEmission, setDailyPoolEmission] = useState('');
  const [metcoinPrice, setMetcoinPrice] = useState('');
  const [minerHashRate, setMinerHashRate] = useState('');
  const [minerPower, setMinerPower] = useState('');
  const [powerPrice, setPowerPrice] = useState('');
  const [miningTarget, setMiningTarget] = useState('');
  const [results, setResults] = useState(null);

  const calculateMiningData = () => {
    const poolHashRateInTH = parseFloat(poolHashRate); // TH/s
    const dailyPoolEmissionInMetcoins = parseFloat(dailyPoolEmission);
    const metcoinPriceInUSD = parseFloat(metcoinPrice);
    const minerHashRateInGH = parseFloat(minerHashRate); // GH/s
    const minerPowerInWatts = parseFloat(minerPower);
    const powerPriceInUSD = parseFloat(powerPrice);
    const miningTargetInMetcoins = parseFloat(miningTarget);
  
    // Convert pool hash rate from TH/s to GH/s
    const poolHashRateInGH = poolHashRateInTH * 1e3;
  
    // Calculate daily emission for the miner
    const dailyMinerEmission = (minerHashRateInGH / poolHashRateInGH) * dailyPoolEmissionInMetcoins;
  
    // Calculate daily earning in USD
    const dailyEarningUSD = dailyMinerEmission * metcoinPriceInUSD;
  
    // Calculate daily cost in USD
    const dailyCostUSD = (minerPowerInWatts * 24 / 1000) * powerPriceInUSD;
  
    // Calculate daily profit in USD
    const dailyProfitUSD = dailyEarningUSD - dailyCostUSD;
  
    // Calculate profit percentage
    const profitPercent = (dailyProfitUSD / dailyCostUSD) * 100;
  
    // Calculate days to reach target
    const daysToTarget = Math.ceil(miningTargetInMetcoins / dailyMinerEmission);
  
    setResults({
      dailyMinerEmission: dailyMinerEmission.toFixed(2),
      dailyEarningUSD: dailyEarningUSD.toFixed(2),
      dailyCostUSD: dailyCostUSD.toFixed(2),
      dailyProfitUSD: dailyProfitUSD.toFixed(2),
      profitPercent: profitPercent.toFixed(2),
      daysToTarget: daysToTarget.toFixed(0), // Round days to reach target to nearest integer
    });
  };
  

  return (
    <section
      className="w-full bg-customDarkBg2 pt-32 pb-8 sm:pt-40 sm:pb-16 xl:pt-48 xl:pb-16"
      id="features"
      style={{
        backgroundImage: `url(${background1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center justify-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full mb-12 lg:mb-0">
            <div className="mx-auto lg:mb-0 w-95 sm:w-4/5 md:w-95 lg:w-unset text-center">
              <h2 className="text-xl lg:text-2xl font-bold mb-4" style={{ color: "#DCA3EF" }}>Advanced Mining Calculator</h2>
              <div className="bg-[#f1f1f1] p-6 mb-6 rounded-lg shadow-lg">
                <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="poolHashRate">
                      Pool Hash Rate (TH/s):
                    </label>
                    <input
                      type="number"
                      id="poolHashRate"
                      value={poolHashRate}
                      onChange={(e) => setPoolHashRate(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dailyPoolEmission">
                      Daily Pool Emission (Metcoins):
                    </label>
                    <input
                      type="number"
                      id="dailyPoolEmission"
                      value={dailyPoolEmission}
                      onChange={(e) => setDailyPoolEmission(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="metcoinPrice">
                      Metcoin Price (USD):
                    </label>
                    <input
                      type="number"
                      id="metcoinPrice"
                      value={metcoinPrice}
                      onChange={(e) => setMetcoinPrice(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
                <div className="p-4 grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="minerHashRate">
                      Miner Hash Rate (GH/s):
                    </label>
                    <input
                      type="number"
                      id="minerHashRate"
                      value={minerHashRate}
                      onChange={(e) => setMinerHashRate(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="minerPower">
                      Miner Power (Watts):
                    </label>
                    <input
                      type="number"
                      id="minerPower"
                      value={minerPower}
                      onChange={(e) => setMinerPower(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="powerPrice">
                      Power Price (USD/kWh):
                    </label>
                    <input
                      type="number"
                      id="powerPrice"
                      value={powerPrice}
                      onChange={(e) => setPowerPrice(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="miningTarget">
                      Mining Target (Metcoins):
                    </label>
                    <input
                      type="number"
                      id="miningTarget"
                      value={miningTarget}
                      onChange={(e) => setMiningTarget(e.target.value)}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="daysToTarget">
                      Days to Reach Target:
                    </label>
                    <input
                      type="number"
                      id="daysToTarget"
                      value={results ? results.daysToTarget : ''}
                      readOnly // Make this read-only since it's calculated
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
                <button
                  onClick={calculateMiningData}
                  className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4"
                >
                  Calculate
                </button>
                {results && (
                  <div className="p-4 grid grid-cols-1 md:grid-cols-5 gap-4 mt-4 bg-white rounded-lg shadow-lg">
                    <div>
                      <p className="text-gray-700 font-bold">Daily Metcoins Mined:</p>
                      <p className="text-gray-800">{results.dailyMinerEmission}</p>
                    </div>
                    <div>
                      <p className="text-gray-700 font-bold">Daily Earning (USD):</p>
                      <p className="text-gray-800">{results.dailyEarningUSD}</p>
                    </div>
                    <div>
                      <p className="text-gray-700 font-bold">Daily Cost (USD):</p>
                      <p className="text-gray-800">{results.dailyCostUSD}</p>
                    </div>
                    <div>
                      <p className="text-gray-700 font-bold">Daily Profit (USD):</p>
                      <p className="text-gray-800">{results.dailyProfitUSD}</p>
                      </div>
                    <div>
                      <p className="text-gray-700 font-bold">Profit Percent (%):</p>
                      <p className="text-gray-800">{results.profitPercent}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
