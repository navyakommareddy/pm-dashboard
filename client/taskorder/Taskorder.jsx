export const taskorderInvoiceAmt  = ((taskorderDetails) => {
    taskorderDetails.data.forEach((taskorderInfo) => {
        var balance = 0;
        taskorderInfo.type = 'taskorder';
        taskorderInfo.Invoices.forEach((invoice) => {
            balance += invoice.invoiceAmt;
        });
        taskorderInfo.balance = taskorderInfo.totalBudget - balance;
        taskorderInfo.invoiceAmtTodate = (Math.round(balance));
        (taskorderInfo.subcontractor == false ?
            taskorderInfo.subcontractor='no' : taskorderInfo.subcontractor='yes');
        taskorderInfo.startDate = taskorderInfo.startDate.substring(0, 10);
        taskorderInfo.endDate = taskorderInfo.endDate.substring(0, 10);
    });
    return taskorderDetails;
});