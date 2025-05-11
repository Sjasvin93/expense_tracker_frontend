import moment from "moment";

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export const getInitials = (name) => {
  if (!name) return "";

  const words = name.trim().split(/\s+/);
  let initials = "";

  for (const word of words) {
    initials += word[0].toUpperCase();
  }

  return initials;
};

export const addThousandsSeperator = (num) => {
  if (num === null || isNaN(num)) return "";

  const [integerPart, fractionalPart] = num.toString().split(".");
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return fractionalPart !== undefined
    ? `${formattedInteger}.${fractionalPart}`
    : formattedInteger;
};

export const prepareExpenseBarChartData = (data = []) => {
  const chartData = data.map((item) => ({
    category: item?.category,
    amount: item?.amount
  }));

  return chartData;
}

export const prepareIncomeBarChartData = (data = []) => {
  console.log("0000000000>>>>>>>>", data, typeof data, Array.isArray(data));
  
  const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));

  const chartData = sortedData.map((item) => ({
    month: moment(item?.date).format("Do MMM"),
    amount: item?.amount,
    source: item?.source
  }))

  return chartData;
};

