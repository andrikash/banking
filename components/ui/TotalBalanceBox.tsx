import { formatAmount } from "@/lib/utils";
import React from "react";
import CountUp from "react-countup/build/CountUp";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <div className="total-balance">
      <div className="total-balance-chart"></div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2">Banks Accounts: {totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>
          <p className="total-balance-amount flex-center gap-2">
            <CountUp end={100} />
            {formatAmount(totalCurrentBalance)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalBalanceBox;
