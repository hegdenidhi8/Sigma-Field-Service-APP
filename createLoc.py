import pandas as pd

# Sample data for the Location object
data = {
    "Name": ["Main Office", "Warehouse A", "Retail Store 1", "Service Center B", "Customer Site C", 
             "Distribution Hub", "Retail Store 2", "Research Facility", "Manufacturing Plant", "Data Center"],
    "Street": ["123 Main St", "456 Warehouse Blvd", "789 Broadway", "101 Service Ln", "202 Customer Rd",
               "300 Industrial Rd", "850 Fourth Ave", "1010 Discovery Blvd", "555 Assembly Ln", "888 Data Blvd"],
    "City": ["Metropolis", "Gotham", "Star City", "Central City", "Coast City",
             "Bludhaven", "Emerald City", "Ivy Town", "Keystone City", "Silicon Valley"],
    "State": ["NY", "NJ", "CA", "MO", "CA", "NJ", "WA", "CT", "KS", "CA"],
    "Country": ["USA", "USA", "USA", "USA", "USA", "USA", "USA", "USA", "USA", "USA"],
    "PostalCode": ["10001", "07030", "90001", "64101", "90015", "07047", "98104", "06357", "66111", "94025"],
    "LocationType": ["Office", "Warehouse", "Retail Store", "Service Center", "Customer Site",
                     "Warehouse", "Retail Store", "Office", "Warehouse", "Office"],
    "Status": ["Active", "Active", "Active", "In Maintenance", "Closed", 
               "Active", "Active", "Active", "Active", "Active"],
    "Description": [
        "Main corporate office.", 
        "Primary warehouse facility.", 
        "Downtown retail location.", 
        "Service center for customer repairs.", 
        "Remote customer site.", 
        "Main distribution center.", 
        "Urban center retail outlet.", 
        "Primary research and development office.", 
        "Main manufacturing facility.", 
        "Central data processing center."
    ]
}

# Convert the dictionary to a DataFrame
df_locations = pd.DataFrame(data)

# Define the file path for the CSV file
csv_file_path = '/Users/nidhi/Documents/location.csv'

# Save the DataFrame to a CSV file
df_locations.to_csv(csv_file_path, index=False)

csv_file_path
