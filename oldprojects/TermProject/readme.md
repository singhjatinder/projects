## CS602 - Term Project
### By: Jay (Jatinder) Singh

![alt text](https://img.shields.io/badge/CS602TermProject-v1.0-green "CS602-TermProject")

#### HOW TO  RUN:
Run command: node server.js <br>
Go to browser: http://localhost:3000


####DETAILS
Here are some files and details:

<table>
    <thead>
        <th>File Name</th>
        <th>Description</th>
    </thead>
    <tbody>
        <tr>
            <td>server.js</td>
            <td>The main file locally host the site</td>
        </tr>
        <tr>
            <td>credentials.js</td>
            <td>Server and Credentials taken from H3 and Schema/collection is stored under the same account.</td>
        </tr>
        <tr>
            <td>
                <ul>
                    <li>customerDB.js</li>
                    <li>orderDB.js</li>
                    <li>productDB.js</li>
                </ul>
            </td>
            <td>
                Schema Models are created for customer details, orders/invoices and all the product with quantities available. 
            </td>
        </tr>
        <tr>
            <td>initDB.js</td>
            <td>Create initial/dummy information in each collections</td>
        </tr>
        <tr>
            <td>clickActions.js</td>
            <td>simple clicks to navigate to different pages</td>
        </tr>
        <tr>
            <td>index.js</td>
            <td>Contains all the routes all the different pages to get or post information</td>
        </tr>
        <tr>
            <td>
            Views: Admin
                <ul>
                   <li>addProductView</li>
                   <li>adminOrderView</li>
                   <li>deleteProductView</li>
                   <li>displayAllCustomersView</li>
                   <li>displayViewProduct</li>
                   <li>editProductView</li>
                   <li>updateOrderView</li>
                </ul>             
            </td>
            <td>
                <li>To add a product.</li>
                <li>To View order for specfic customer</li>
                <li>Confirm Delete Product view</li>
                <li>Give a full list of customers</li>
                <li>Show a list of all products</li>
                <li>Edit products View</li>
                <li>Update quantity on each order</li>
            </td>
        </tr>
        <tr>
            <td>
            Views: Customer
                <ul>
                   <li>customerOrderView</li>
                   <li>displayPlaceOrderView</li>
                   <li>orderView</li>
                </ul>             
            </td>
            <td>
                <ul>
                    <li>View order what items were ordered and which werent due to quantity</li>
                    <li>To place n order</li>
                    <li>For Customer to view all their orders</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>apisearch.js</td>
            <td>For API queries. WILL return XML or JSOn</td>
        </tr>
        <tr colspan="2">
            <td>
            JS FILES
                <li>addProduct - render Add Product view</li>
                <li>customers - List all the customers for the admin</li>
                <li>deleteOrder - detele the order selected and go back to list of customers orders</li>
                <li>deleteProduct - render Delete Product View</li>
                <li>deleteProductAfterConfirm - delete the product and view all the products</li>
                <li>displayProduct - render display Product view with all the product for ADMIN</li>
                <li>editProduct - render Edit product VIew</li>
                <li>orderConfirm - places an order and views the ordered items with order ID + if quantity wasn't selected just view all products</li>
                <li>orderProduct - IntialView to order prodct for Customer/buyer</li>
                <li>orderForCustomer - Views all order for customer by given the customerID</li>
                ... all the other files are self explanation   
            </td>
        </tr>
    </tbody>
</table>


###Known Bugs:
<ul> 
    <li>Customer: Sometimes when you search and order a product for the first time it wont go through. If you try again, it works fine. It will be fixed in v2.0</li>
</ul>