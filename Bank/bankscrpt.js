class Bank {
    static getAccountDetails() {



        var accountdetails = {
            1000: { name: "ajay", acno: 1000, password: "testone", balance: 5000 },
            1001: { name: "jayan", acno: 1001, password: "testtwo", balance: 4000 },
            1002: { name: "ajith", acno: 1002, password: "testthree", balance: 6000 },
            1003: { name: "ram", acno: 1003, password: "testfour", balance: 7000 },
        }
        return accountdetails
    }
    static authenticate(acno, password) {
        let accountdetails = Bank.getAccountDetails()
        if (acno in accountdetails) {
            if (password == accountdetails[acno]["password"]) {
                return 1;
            }
            else {
                return -1;
            }

        }
        else {
            return 0;
        }
    }

    static login() {
        let acno = document.querySelector(".acn").value;
        let pwd = document.querySelector(".pwd").value;
        let user = Bank.authenticate(acno, pwd)
        if (user == 1) {
            alert("login sucess")
            window.location.href = "bank2.html"
        }
        else if (user == -1) {
            alert("invalid password")
        }
        else {
            alert("invalid account")
        }
    }
    static withdraw() {
        let accountdetails = Bank.getAccountDetails()
        let acno = document.querySelector("#c2").value;
        let pwd = document.querySelector("#c3").value;

        let user = Bank.authenticate(acno, pwd)
        let amount = Number(document.querySelector("#c4").value)
        if (user == 1) {


            if (amount <= accountdetails[acno]["balance"]) {
                accountdetails[acno]["balance"] -= amount
                alert(amount + " has been debited sucessfully")
            }
            else {
                alert("insufficent balance")
            }
        }
        else {
            alert("invalid user")
        }

    }
    static deposit() {
        let accountdetails = Bank.getAccountDetails()
        let acno = document.querySelector("#c2").value;
        let pwd = document.querySelector("#c3").value;

        let user = Bank.authenticate(acno, pwd)
        let amount = Number(document.querySelector("#c4").value)
        if (user == 1) {
            accountdetails[acno]["balance"] += amount
            alert(amount + " has been credited sucessfully")

        }
        else {
            alert("insufficent balance")
        }

    }
}












