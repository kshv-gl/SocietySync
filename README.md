# 🏢 SocietySync
### *One Society, One Voice*

SocietySync is a React-based community complaint portal designed for residents of apartments and housing societies. It provides a transparent, structured platform where residents can log complaints, tag the relevant department, and track resolution — all visible in a shared community feed.

---

## 🚨 Problem Statement

Residents of housing societies and apartment complexes face a recurring frustration — complaints about broken lifts, water leakage, poor security, dirty common areas, or electrical faults are either ignored or lost in overflowing WhatsApp groups with zero accountability.

There is no structured, transparent system where:
- Residents can formally log issues
- Everyone in the society can see what problems exist
- The status of a complaint is tracked and updated
- Urgent problems are highlighted based on community support

---

## 💡 Solution

**SocietySync** gives every resident a voice.

Anyone can post a complaint by tagging the relevant department (Plumbing, Electricity, Security, etc.). The complaint instantly appears in a shared community feed visible to all residents. Others can upvote it to signal urgency, and the status updates from **Pending → In Progress → Resolved** so the entire community stays informed in real time.

---

## ✅ Features

### 👤 Member 1 — Core Complaint System - Lalit Mittal
| # | Feature | Description |
|---|---------|-------------|
| 1 | **Complaint Form** | Submit a complaint with title, description, flat number, and department |
| 2 | **Complaint Card** | Displays each complaint with department badge, flat number, and timestamp |
| 3 | **Department Badge** | Color-coded tags — Plumbing 🔧, Electricity ⚡, Security 🛡️, Cleaning 🧹 |
| 4 | **Navbar** | Top navigation bar with Login and Signup buttons |

### 👤 Member 2 — Feed & Filtering - Harsh Sharma
| # | Feature | Description |
|---|---------|-------------|
| 1 | **Community Feed** | Renders all complaints as a list of cards |
| 2 | **Filter by Department** | Dropdown to show only selected department complaints |
| 3 | **Filter by Status** | Buttons to filter Pending / In Progress / Resolved |
| 4 | **Search Bar** | Live keyword search across complaint titles |

### 👤 Member 3 — Interactions & Logic - Keshav Goel
| # | Feature | Description |
|---|---------|-------------|
| 1 | **Complaint Counter** | Live count of Total, Pending, In Progress, and Resolved complaints using `array.length` |
| 2 | **Delete Complaint** | Remove any complaint from the feed using `filter by id` |
| 3 | **Upvote Button** | Each complaint has an upvote counter using `useState + increment` |
| 4 | **Status Cycle Button** | Click to cycle status Pending → In Progress → Resolved |

---

> *"Don't just complain — SocietySync it."* 🏢
