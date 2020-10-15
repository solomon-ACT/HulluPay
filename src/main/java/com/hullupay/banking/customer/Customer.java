package com.hullupay.banking.customer;

public class Customer {
    String mobileNumber;
    String fullName;

    public Customer(String mobileNumber, String fullName) {
        this.mobileNumber = mobileNumber;
        this.fullName = fullName;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }
}
