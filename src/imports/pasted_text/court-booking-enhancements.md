Enhance the existing Court Booking Management System by adding the following advanced operational modules and updating the booking workflow. Maintain the same design system, color palette, typography, spacing, component library, and interaction patterns already established. The new modules should integrate seamlessly with the existing application.

1. Booking Modification & Live Booking Management

Enhance the existing booking flow to support editing active, upcoming, and completed bookings before final payment.

Booking Edit Capabilities

Reception staff should be able to open any booking and modify it at any point before payment is completed.

Allow editing of:

Sport (optional if business rules allow)
Assigned Court
Booking Date
Booking Start Time
Booking Duration
Equipment Rentals
Quantity of rented equipment
Discounts
Staff Notes

Display a prominent "Edit Booking" action from both the Booking Details page and Live Bookings screen.

Extend Booking Duration

A common scenario is when a player decides to continue playing.

Examples:

Booked for 1 hour → Extend by 30 minutes
Booked for 1 hour → Extend by 1 hour
Booked for 2 hours → Extend by 2 additional hours

The system should:

Check court availability immediately after the current booking.
Prevent extension if another booking already exists.
Suggest the maximum available extension.
Instantly recalculate pricing.
Update the booking timeline.
Update the live countdown timer.
Refresh court availability.

Display extension options as quick chips:

+30 Minutes

+1 Hour

+2 Hours

+Custom Duration

Modify Equipment Rentals

Equipment can be issued at different stages.

Reception should be able to:

Add Equipment

Remove Equipment

Increase Quantity

Decrease Quantity

Replace Equipment

Examples:

Initially booked:

2 Tennis Rackets

Later customer requests:

+2 Additional Rackets

+Extra Tennis Balls

+Water Bottles

These should automatically update the final bill.

Final Billing Screen

Before collecting payment, display a comprehensive billing summary.

Booking Charges

Original Court Booking

Booking Extensions

Additional Time Charges

Peak Hour Charges

Weekend Charges

Holiday Charges

Equipment Charges

Initially Issued Items

Additional Items Added Later

Returned Items

Damaged Items

Lost Items

Security Deposit Adjustments

Other Charges

Penalty Charges

Late Checkout

Damage Charges

Locker Charges

Other Miscellaneous Charges

Discounts

Membership Discount

Manual Discount

Coupon Discount

Promotional Discount

Billing Summary

Subtotal

Taxes

Discounts

Final Total

Outstanding Amount

Payment Method

Booking Timeline

Each booking should maintain an activity history.

Examples:

10:00 AM

Booking Created

11:05 AM

Extended by 30 Minutes

11:15 AM

Added Tennis Balls

12:10 PM

Returned Equipment

12:20 PM

Cash Payment Received

12:21 PM

Invoice Generated

This timeline should make every booking completely auditable.

2. Membership Management Module

Create a dedicated Membership Management section.

This module manages recurring memberships such as:

Gym

Swimming

Pickleball

Tennis

Badminton

Fitness Classes

Personal Training

Future Membership Categories

Membership Categories

Admin can create unlimited membership plans.

Each membership should include:

Membership Name

Category

Description

Duration

Pricing

Discount Percentage

Joining Fee

Renewal Fee

Benefits

Maximum Visits

Booking Priority

Status

Color Theme

Display memberships as premium cards.

Examples:

Gym - 3 Months

Swimming - 6 Months

Annual Gym Membership

Premium Tennis Membership

Family Membership

Corporate Membership

Membership Pricing

Support multiple durations.

Examples:

1 Month

3 Months

6 Months

9 Months

12 Months

Custom Duration

Each duration should have independent pricing.

Member Management

Maintain a complete member database.

Each member profile should display:

Member ID

Profile Photo

Full Name

Phone

Email

Address

Membership Type

Membership Start Date

Expiry Date

Renewal Status

Payment History

Visit History

Booking History

Notes

Emergency Contact

Membership Dashboard

Display metrics such as:

Active Members

Expired Memberships

Renewals Due

Today's Check-ins

Monthly Revenue

Membership Growth

Membership-wise Revenue

Upcoming Expiries

Recent Renewals

Membership Actions

Staff should be able to:

Create Membership

Renew Membership

Upgrade Membership

Downgrade Membership

Pause Membership

Resume Membership

Transfer Membership (if business allows)

Cancel Membership

Generate Membership Invoice

Send Renewal Reminder

Email Membership Card

WhatsApp Membership Details

Membership Benefits

Support configurable benefits such as:

Free Court Hours

Discount on Court Bookings

Discount on Equipment Rentals

Free Locker Usage

Priority Booking

Guest Passes

Free Coaching Sessions

The billing engine should automatically apply membership discounts wherever applicable.

3. Advertising Space Management

Create a completely new module for managing advertising inventory across the sports facility.

The facility has multiple advertising locations that can be rented by businesses.

Dashboard

Display summary cards.

Total Advertising Spots

Available Spots

Occupied Spots

Upcoming Renewals

Revenue Generated

Pending Payments

Expiring Contracts

Occupancy Percentage

Advertising Inventory

Maintain every advertising location.

Each advertising spot should include:

Spot Name

Spot Code

Zone

Location

Photograph

Dimensions

Indoor / Outdoor

Display Type

Visibility Rating

Monthly Rental Price

Quarterly Rental Price

Yearly Rental Price

Availability Status

Notes

QR Code

Spot Status

Use color indicators.

Available

Reserved

Occupied

Maintenance

Expired

Blocked

Spot Booking

Reception/Admin should be able to create advertising bookings.

Fields:

Company Name

Brand Name

Contact Person

Phone

Email

GST Number

Advertising Spot

Start Date

End Date

Rental Duration

Pricing Plan

Discount

Security Deposit

Installation Charges

Printing Charges

Total Cost

Payment Status

Remarks

Contract Lifecycle

Each advertising booking should support:

Draft

Quotation Sent

Confirmed

Active

Expiring Soon

Expired

Renewed

Cancelled

Payment Tracking

Support:

Advance Payment

Partial Payment

Full Payment

Pending Balance

Invoice Generation

Receipt Generation

Outstanding Dues

Booking Timeline

Track complete activity history.

Contract Created

Quotation Sent

Payment Received

Artwork Approved

Poster Installed

Campaign Started

Renewal Reminder Sent

Campaign Ended

Contract Renewed

Calendar View

Provide a calendar for advertising bookings.

View:

Daily

Weekly

Monthly

See:

Available Spots

Upcoming Expiries

Renewals

New Installations

Reports

Generate reports for:

Advertising Revenue

Occupancy Rate

Most Popular Spots

Pending Payments

Expired Contracts

Upcoming Renewals

Revenue by Zone

Revenue by Customer

Monthly Comparison

Export to PDF, Excel, and CSV.

UX & System Enhancements

Apply these enhancements across all modules:

Every booking, membership, and advertising contract should maintain a complete activity timeline for audit purposes.
Introduce reusable side drawers and modal dialogs for quick edits without leaving the current screen.
Use sticky billing panels with real-time recalculation whenever durations, add-ons, discounts, or memberships change.
Display warning dialogs when extending a booking conflicts with another reservation.
Add global search across bookings, members, memberships, invoices, advertising contracts, and customers.
Surface smart notifications for expiring memberships, overdue payments, advertising renewals, and booking conflicts.
Ensure all pricing updates, invoices, payment statuses, analytics, and reports are synchronized instantly across the application.

The final experience should continue to feel like a premium SaaS product, comparable to enterprise management platforms, while remaining fast, intuitive, and optimized for reception staff handling high volumes of bookings and transactions.