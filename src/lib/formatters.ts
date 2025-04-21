
/**
 * Formats a number as Indian Rupees (₹)
 * @param amount The amount to format
 * @returns Formatted amount with ₹ symbol and Indian formatting
 */
export function formatIndianRupees(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2
  }).format(amount);
}
