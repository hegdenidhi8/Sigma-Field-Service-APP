public with sharing class WorkOrderController {
    @AuraEnabled (cacheable=true)
    public static List<WorkOrder> getCurrentUserWO(){
        List<WorkOrder> listOfWorkOrders = new List<WorkOrder>();
        Id currentUser = UserInfo.getUserId();
        Contact userContact = [SELECT Id, AccountId FROM Contact WHERE OwnerId = :currentUser LIMIT 1];
        listOfWorkOrders = [Select Id, WorkOrderNumber, status,Description From WorkOrder where AccountId = :userContact.AccountId];
        return listOfWorkOrders;
    }
}