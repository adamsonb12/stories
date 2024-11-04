interface CurrencyFormatterParams {
  amount: number;
  locale?: string;
  currencyCode?: string;
  disableDecimalPlaces?: boolean;
  removeEmptyDecimalPlaces?: boolean;
}

export const formatCurrency = ({
  amount,
  locale = "en",
  currencyCode = "USD",
  disableDecimalPlaces = false,
  removeEmptyDecimalPlaces = true,
}: CurrencyFormatterParams) => {
  if (!Number.isFinite(Number(amount))) {
    return null;
  }

  // TODO => fix this to use the locale from params
  const formattedAmount = new Intl.NumberFormat("en", {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: disableDecimalPlaces ? 0 : 2,
    maximumFractionDigits: disableDecimalPlaces ? 0 : 2,
  }).format(amount);

  if (removeEmptyDecimalPlaces && formattedAmount.includes(".00")) {
    // TODO => this needs to work dynamically for decimal point
    return formattedAmount.split(".")[0];
  }

  return formattedAmount;
};
