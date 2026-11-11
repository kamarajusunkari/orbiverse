import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export interface DriftAuditSubmission {
  id: string;
  name: string;
  email: string;
  phone?: string;
  website?: string;
  monthlySpend?: string;
  bottleneck?: string;
  notes?: string;
  source?: string;
  submittedAt: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone = "",
      website = "",
      monthlySpend = "₹1,00,000 - ₹5,00,000",
      spend = "",
      bottleneck = "Ad spend not converting / Low ROAS",
      notes = "",
      source = "drift-audit-page",
    } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 }
      );
    }

    const leadData: DriftAuditSubmission = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      website: String(website).trim(),
      monthlySpend: String(monthlySpend || spend).trim(),
      bottleneck: String(bottleneck).trim(),
      notes: String(notes).trim(),
      source: String(source).trim(),
      submittedAt: new Date().toISOString(),
    };

    // 1. Persist lead to fallback file (data/leads.json)
    try {
      const dataDir = path.join(process.cwd(), "data");
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      const filePath = path.join(dataDir, "leads.json");
      let existingLeads: DriftAuditSubmission[] = [];
      if (fs.existsSync(filePath)) {
        try {
          const raw = fs.readFileSync(filePath, "utf-8");
          existingLeads = JSON.parse(raw);
        } catch {
          existingLeads = [];
        }
      }

      existingLeads.unshift(leadData);
      fs.writeFileSync(filePath, JSON.stringify(existingLeads, null, 2), "utf-8");
    } catch (fsErr) {
      console.error("[DriftAudit] Failed to write lead to leads.json:", fsErr);
    }

    // 2. Format notification for hello@orbiverse.co
    console.log("==================================================");
    console.log("🚀 NEW DRIFT AUDIT SUBMISSION -> hello@orbiverse.co");
    console.log(`Lead ID:        ${leadData.id}`);
    console.log(`Name:           ${leadData.name}`);
    console.log(`Email:          ${leadData.email}`);
    console.log(`Phone/WhatsApp: ${leadData.phone || "N/A"}`);
    console.log(`Website:        ${leadData.website || "N/A"}`);
    console.log(`Monthly Spend:  ${leadData.monthlySpend}`);
    console.log(`Bottleneck:     ${leadData.bottleneck}`);
    console.log(`Notes:          ${leadData.notes || "None"}`);
    console.log(`Source:         ${leadData.source}`);
    console.log(`Timestamp:      ${leadData.submittedAt}`);
    console.log("==================================================");

    return NextResponse.json({
      success: true,
      message: "Drift audit request received. A growth architect will review your data within 24 hours.",
      leadId: leadData.id,
    });
  } catch (error) {
    console.error("[DriftAudit] Submission error:", error);
    return NextResponse.json(
      { error: "Unable to process audit submission. Please email hello@orbiverse.co directly." },
      { status: 500 }
    );
  }
}
