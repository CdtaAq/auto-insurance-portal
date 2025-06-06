# auto-insurance-portal

https://github.com/CdtaAq/auth-service.git
https://github.com/CdtaAq/insurance-service.git
https://github.com/CdtaAq/notification-service.git
https://github.com/CdtaAq/payment-service.git
# Auto Insurance Portal – Postman Collection

This Postman collection automates the full flow for the Auto Insurance Portal system, including:

- ✅ User Registration  
- ✅ Login  
- ✅ Policy Creation  
- ✅ File Upload to AWS S3  
- ✅ Payment via Stripe  
- ✅ Email Notification with PDF using iText  

---

## 🧪 Workflow Steps Covered

1. **Register User** – Create a new user account.
2. **Login** – Authenticate and retrieve JWT access token.
3. **Create Policy** – Submit car, driver, and location info.
4. **Upload File** – Upload related documents (license, vehicle papers).
5. **Initiate Payment** – Create a payment intent via Stripe.
6. **Send Email + PDF** – Send policy confirmation with attached PDF.

---

## 🚀 How to Use

### 1. Import Collection
- Open **Postman**
- Click **Import**
- Select `Auto_Insurance_Integration_Test.postman_collection.json`

### 2. Set Environment
- Create a new environment or global variable:
  - `accessToken` (add manually after login request)
  - `userId`, `policyId` (from previous responses)
- Ensure your backend services are running locally:
  - `auth-service`: `http://localhost:8080`
  - `insurance-service`: `http://localhost:8081`
  - `file-service`: `http://localhost:8082`
  - `payment-service`: `http://localhost:8083`
  - `notification-service`: `http://localhost:8084`

### 3. Run Collection
- Use **Collection Runner** for end-to-end automation.
- Or run each request manually, step-by-step.

---

## 📂 Notes

- Replace any placeholder values (`userId`, `policyId`, `file`, `toEmail`) based on real-time responses.
- The Upload request requires a file from your local filesystem.
- The Email endpoint must be provided a valid email address for testing.
- Stripe webhook must be configured if testing live payments.

---

## 🛠 Example Variables

| Variable     | Description                        |
|--------------|------------------------------------|
| `accessToken`| Retrieved from login response      |
| `userId`     | From registration or user fetch    |
| `policyId`   | From the policy creation response  |
| `file`       | Absolute path to uploadable file   |
| `toEmail`    | Valid recipient email address      |

---

© 2025 Auto Insurance Portal Project Team

