# 📱 WhatsApp Integration - Complete Guide

## ✅ All Forms Send Data to WhatsApp!

Every interactive card in the "Get in Touch" section now sends data to WhatsApp when submitted.

---

## 🏢 **Campus Visit Form**

### What Happens:
1. User fills: Branch, Name, Contact Number, Time to Visit
2. Click **"Submit Request"** button
3. **WhatsApp opens automatically** with pre-filled message
4. User can send message to QUASTECH
5. Success message shows → **"View Map & Directions"** button appears

### WhatsApp Message Format:
```
*Campus Visit Request*

👤 *Name:* John Doe
📱 *Contact:* 9876543210
🏢 *Branch:* Thane Branch
📍 *Address:* 201, Anant Laxmi Chambers, Dada Patil Marg, opp. Waman Hari Pethe Jewellers, Thane (W), Maharashtra 400602
⏰ *Visit Time:* 2:00 PM - 4:00 PM

I would like to schedule a campus visit. Please confirm.
```

---

## 📚 **Book Demo Form**

### What Happens:
1. User fills: Name, Email, Phone, Course, Date, Time, Message
2. Click **"Continue to WhatsApp"** button
3. **WhatsApp opens automatically** with demo booking details
4. User can send message to QUASTECH
5. Form closes after sending

### WhatsApp Message Format:
```
*Demo Class Booking Request*

👤 *Name:* John Doe
📧 *Email:* john@example.com
📱 *Phone:* 9876543210
📚 *Course:* Full Stack Web Development
📅 *Preferred Date:* 2024-11-15
⏰ *Preferred Time:* 2:00 PM - 4:00 PM
💬 *Message:* I'm interested in learning React and Node.js

I would like to book a free demo class. Please confirm the schedule.
```

---

## 💬 **Live Chat**

### What Happens:
1. User clicks **"Live Chat"** card
2. **WhatsApp opens immediately** with pre-filled greeting
3. User can start chatting with counselors

### WhatsApp Message:
```
Hi, I would like to chat with a counselor about your courses.
```

---

## 📞 **Call Us Card**

### What Happens:
1. User clicks **"Call Us"** card
2. **Phone dialer opens** with number: `+91 8422800381`
3. User can make the call directly

---

## 📧 **Email Us Card**

### What Happens:
1. User clicks **"Email Us"** card
2. **Email client opens** with pre-filled professional enquiry
3. User can send email directly

### Email Format:
- **To:** info@quastech.in
- **Subject:** Course Enquiry from Website
- **Body:** 
```
Hello QUASTECH Team,

I am interested in learning more about your courses and would like to receive detailed information about:

- Available courses and programs
- Course duration and schedule
- Fee structure and payment options
- Placement assistance
- Certification details

Please contact me at your earliest convenience.

Thank you,
```

---

## 🔍 **How to Verify WhatsApp Integration is Working:**

### Step 1: Fill the Form
Fill all required fields in any form

### Step 2: Submit
Click the submit button

### Step 3: Check Console (Developer Mode)
Open browser console (F12) and look for:
```
Opening WhatsApp with message: [your message]
WhatsApp URL: https://wa.me/918422800381?text=...
```

### Step 4: WhatsApp Opens
- ✅ **Desktop**: Opens WhatsApp Web in new tab
- ✅ **Mobile**: Opens WhatsApp app directly
- ⚠️ **If Blocked**: Toast notification shows "Please allow popups"

### Step 5: Success Feedback
- Toast notification: **"Opening WhatsApp! 💬"**
- For Campus Visit: Success message + Map button appears
- For Book Demo: Form closes after 1.5 seconds

---

## 🎯 **WhatsApp Number:**
All messages go to: **+91 8422800381**

---

## 🛠️ **Troubleshooting:**

### Problem: WhatsApp doesn't open
**Solution:** 
1. Check if popups are blocked in browser
2. Look at browser console for errors
3. Allow popups for your website

### Problem: Message not formatted properly
**Solution:** 
- All messages use proper encoding
- Special characters are automatically handled
- Bold text uses WhatsApp markdown (*text*)

### Problem: Wrong phone number
**Solution:**
- Update in form components:
  - `BranchVisitForm.tsx` line 93
  - `BookDemoForm.tsx` line 49
  - `EnquiryForm.tsx` line 43

---

## ✨ **Features:**

✅ **Automatic WhatsApp Integration** - All forms
✅ **Professional Message Formatting** - Bold, emojis, structured
✅ **Branch Details Included** - Full address in visit requests
✅ **Toast Notifications** - User feedback on success/failure
✅ **Console Logging** - Debug information in browser console
✅ **Popup Blocker Detection** - Warns user if blocked
✅ **Mobile Optimized** - Works on all devices

---

## 📱 **Test It:**

1. Go to the enquiry section on your website
2. Click any card (Visit Us, Book Demo, Live Chat)
3. Fill the form
4. Submit
5. WhatsApp should open with your data! 🚀

**All data you fill is automatically sent to WhatsApp for processing by QUASTECH team!**





