
export const projectInvoiceAmt  = ((projectDetails) => {
    projectDetails.data.forEach((projectInfo) => {
        var balance = 0;
        projectInfo.type = 'standalone';
        projectInfo.ProjectInvoices.forEach((invoice) => {
            balance += invoice.invoiceAmt;
        });
        projectInfo.balance = projectInfo.totalBudget - balance;
        projectInfo.invoiceAmtTodate = (Math.round(balance));
        (projectInfo.subcontractor == false ? 
            projectInfo.subcontractor='no' : projectInfo.subcontractor='yes');
        projectInfo.startDate = projectInfo.startDate.substring(0, 10);
        projectInfo.endDate = projectInfo.endDate.substring(0, 10);
    });
    return projectDetails;
});
