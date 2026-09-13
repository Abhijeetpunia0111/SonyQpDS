Here's a comprehensive **Figma Make prompt** that is written as if you're briefing a senior Product Designer + UX Designer + Design System expert. It includes the user flow, UI behavior, interactions, branding, and edge cases so Figma Make can generate a much better outcome.

---

# Figma Make Prompt - XCourt Sports Court Booking & Management System

## Project Overview

Design a modern, premium, sports facility booking and management web application for **XCourt Sports** ([https://xcourtsports.com](https://xcourtsports.com)).

The application should feel premium, minimal, energetic and extremely easy for staff members to operate during busy hours.

The application will be used by:

* Customers booking courts online
* Reception/Admin staff handling walk-in bookings
* Facility managers

The primary objective is to reduce booking time to under 60 seconds while maintaining a premium experience.

---

# Brand Guidelines

Follow XCourt Sports branding.

Primary Colors

Deep Green
`#002E25`

Dark Blue
`#00384E`

Light Green
`#B5E770`

Accent Yellow
`#E8FF00`

Background
`#FDFFE7`

White
`#FFFFFF`

Design Style

* Premium Sports Club
* Modern
* Spacious layouts
* Rounded cards
* Large typography
* Minimal interface
* Easy scanning
* High contrast CTAs
* Smooth animations
* Glassmorphism only where appropriate
* Plenty of white space

Typography

Modern sans-serif

Examples

* Inter
* Plus Jakarta Sans
* Manrope

---

# Overall Application Structure

Create the following modules

Dashboard

Bookings

Calendar View

Walk-in Booking

Online Booking

Courts

Sports

Equipment Rentals

Members

Invoices

Payments

Reports

Settings

Staff Management

Notification Center

---

# User Types

### Customer

Can

* Book online
* View bookings
* Make payments
* Receive invoices

---

### Reception Staff

Can

* Create walk-in bookings
* Assign courts
* Collect payments
* Generate invoices
* Rent equipment
* Return equipment

---

### Admin

Full control over

Pricing

Courts

Slots

Reports

Invoices

Taxes

Equipment

Staff

Discounts

---

# Booking Journey

There are two booking methods

## 1. Online Booking

Customer visits website.

Flow

Select Sport

↓

Select Court

↓

Select Date

↓

Select Duration

↓

System automatically calculates available slots

↓

Select Time

↓

Choose Add-ons

↓

View Billing Summary

↓

Pay via Razorpay

↓

Booking Confirmed

↓

Email Confirmation

↓

WhatsApp Confirmation

↓

Invoice Generated

---

## 2. Offline Walk-in Booking

This flow should be optimized for reception staff.

Step 1

Reception clicks

"New Walk-in Booking"

---

Step 2

Search existing customer

or

Create new customer

Fields

* Name
* Mobile Number
* Email
* Gender
* Member / Non-member

---

Step 3

Select Sport

Examples

* Tennis
* Pickleball
* Swimming
* Badminton
* Football
* Cricket Nets

Show these as beautiful sport cards with icons.

---

Step 4

Select Court

Examples

Court 1

Court 2

Court 3

Court 4

Display

Available

Occupied

Maintenance

Booked

using colored status chips.

---

Step 5

Select Date

Large calendar component

---

Step 6

Select Duration

Quick chips

1 Hour

2 Hours

3 Hours

4 Hours

Custom Duration

---

Step 7

Select Time Slot

Example

2 PM – 3 PM

2 PM – 4 PM

6 PM – 8 PM

Unavailable slots should appear disabled.

---

Step 8

System Calculates

Automatically calculate

Court Charges

based on

Sport

Court

Duration

Date

Peak Hours

Weekend Pricing

Holiday Pricing

if applicable.

---

Step 9

Equipment Rental

Optional Add-ons

Examples

Tennis Racket

Pickleball Paddle

Balls

Swimming Kit

Locker

Shoes

Water Bottle

Towels

Each rental shows

Hourly Rate

Quantity

Deposit (if applicable)

Availability

Rental timer

---

Step 10

Booking Summary

Display

Sport

Court

Duration

Time

Equipment

Subtotal

Taxes

Discount

Grand Total

Large

"Book Now"

button

---

# Active Booking Screen

Once booked,

move booking to

Live Bookings

Reception can see

Customer Name

Court

Start Time

Remaining Time

Equipment Issued

Payment Status

Booking Status

Live countdown timer

Color indicators

Upcoming

Active

Completed

Overdue

---

# Booking Completion

When customer finishes playing

Reception opens booking.

Show

Booking Details

Equipment Issued

Equipment Returned

Extra Charges

Damage Charges

Late Return Charges

Additional Booking

---

Equipment Return

Staff can mark

Returned

Missing

Damaged

Lost

Each changes billing automatically.

---

# Offline Payment Flow

After reviewing billing

Staff clicks

Collect Payment

Options

Cash

UPI

Card

Split Payment

Gift Voucher

Wallet

Enter amount received

Show balance

Show change to return

---

Payment Success

Update status to

Paid

Generate Invoice

Automatically

Email invoice

Send WhatsApp invoice

Show success animation

---

# Invoice

Professional invoice

Includes

Invoice Number

Booking Number

Customer Details

GST

Court Charges

Rental Charges

Taxes

Discount

Total

Payment Method

QR Code

Business Details

Download PDF

Email Invoice

WhatsApp Invoice

---

# Dashboard

Create beautiful analytics cards

Today's Revenue

Active Bookings

Available Courts

Completed Bookings

Upcoming Bookings

Equipment Rentals

Pending Payments

Monthly Revenue

Graphs

Revenue Trend

Sport Popularity

Peak Booking Hours

Court Utilization

Customer Growth

---

# Calendar View

Beautiful booking calendar

Views

Day

Week

Month

Color-code bookings

Drag and drop bookings

Resize bookings

Conflict detection

---

# Court Management

Each court has

Court Name

Sport

Hourly Rate

Peak Pricing

Availability

Maintenance Status

Images

Operating Hours

---

# Sports Management

Admin can create

Sport Name

Pricing

Duration Rules

Equipment

Available Courts

Color Theme

---

# Equipment Module

Track

Equipment Name

Stock

Available

Issued

Maintenance

Lost

Rental Price

Deposit

Condition

Barcode

QR Code

---

# Customer Profile

Customer details

Booking history

Invoices

Payments

Membership

Favorite Sport

Equipment History

Outstanding Dues

Notes

---

# Notifications

Automatic

Booking Confirmation

Reminder

Booking Started

Booking Ending

Payment Pending

Invoice Sent

Equipment Reminder

Email

WhatsApp

SMS Ready

---

# Search

Global Search

Search by

Customer

Phone

Booking ID

Invoice

Court

Sport

Payment

---

# Reports

Revenue

Bookings

Equipment Usage

Peak Hours

Court Occupancy

Payment Methods

GST

Tax Reports

Export

Excel

PDF

CSV

---

# UX Requirements

Everything should require minimal clicks.

Use

Progress Stepper

Live Validation

Auto-save Drafts

Sticky Summary Panel

Instant Price Calculation

Search Everywhere

Keyboard Friendly

Fast Reception Workflow

Loading Skeletons

Empty States

Confirmation Modals

Success Animations

Toast Notifications

Responsive Layout

---

# Components Required

Buttons

Cards

Tables

Date Picker

Time Picker

Booking Timeline

Progress Bar

Calendar

Equipment Cards

Sport Cards

Invoice Card

Payment Modal

Booking Modal

Customer Drawer

Status Chips

Statistics Cards

Navigation Sidebar

Top Navigation

Profile Dropdown

Floating Action Button

---

# Micro Interactions

Smooth page transitions

Card hover animations

Animated booking confirmation

Equipment check-in/check-out animations

Payment success animation

Invoice generation animation

Confetti on successful booking

Real-time countdown timers

Live court occupancy indicators

---

# Design Quality

The final UI should resemble the quality of products like:

* Calendly
* Notion
* Stripe Dashboard
* Square POS
* Fresha
* Playtomic
* CourtReserve

The interface should feel premium, modern, clean, intuitive, and optimized for both desktop and tablet use. It should emphasize quick staff workflows, clear visual hierarchy, and efficient booking management while maintaining XCourt Sports' energetic sports branding.
