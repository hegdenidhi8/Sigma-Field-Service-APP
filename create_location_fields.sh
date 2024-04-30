#!/bin/bash

# Define the directory for the Location object fields
OBJECT_META_DIR="force-app/main/default/objects/Location/fields"

# Ensure the directory exists
mkdir -p $OBJECT_META_DIR

# Function to create field metadata
create_field() {
    cat > $OBJECT_META_DIR/$1.field-meta.xml <<EOL
<?xml version="1.0" encoding="UTF-8"?>
<CustomField xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>$1</fullName>
    <label>$2</label>
    <type>$3</type>
    $4
    $5
</CustomField>
EOL
}

# Street
create_field "Street__c" "Street" "Text" "<length>255</length>" ""

# City
create_field "City__c" "City" "Text" "<length>40</length>" ""

# State
create_field "State__c" "State" "Text" "<length>80</length>" ""

# Country
create_field "Country__c" "Country" "Text" "<length>80</length>" ""

# PostalCode
create_field "PostalCode__c" "Postal Code" "Text" "<length>20</length>" ""

# Phone
create_field "Phone__c" "Phone" "Phone" "" ""

# Manager/Contact
create_field "Manager__c" "Manager" "Lookup" "<referenceTo>Contact</referenceTo>" "<relationshipName>ManagedLocations</relationshipName>"

# Service Territory
create_field "ServiceTerritory__c" "Service Territory" "Lookup" "<referenceTo>ServiceTerritory</referenceTo>" "<relationshipName>Locations</relationshipName>"


