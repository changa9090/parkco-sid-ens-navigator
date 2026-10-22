/* PNC Legal Pty Ltd t/a Park & Co Lawyers — SID 482 · ENS 186 · SESR 494 Employer Sponsored Visa Navigator */
(function () {
  "use strict";

  const DEFAULT_SOURCES = [{"id": "dha_sid_482", "category": "DHA Subclass Page", "name_ko": "Skills in Demand (SID) 비자 (Subclass 482) 공식 안내", "name_en": "Skills in Demand (SID) Visa (Subclass 482) Official Page", "authority": "Department of Home Affairs", "url": "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-skill-shortage-482", "method": "SharePoint PageSchemaHiddenField JSON + GetPriceList API", "cadence": "Weekly (VAC on 1 July)", "tracks": "3 Streams (Core Skills $79,423, Specialist Skills $146,576, Labour Agreement), 1-Yr FTE Work Exp, Base VAC $4,015", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-10-22T12:30:43+10:00", "last_verified_ok": "2026-10-22T12:30:43+10:00", "sha256_prefix": "9acaf07d0f8bad39", "content_length": 1294797, "live_method": "https-direct-live"}, {"id": "dha_ens_186", "category": "DHA Subclass Page", "name_ko": "고용주 지명 영주비자 (ENS Subclass 186 — TRT / Direct Entry / LA)", "name_en": "Employer Nomination Scheme (ENS Subclass 186 — TRT / DE / LA)", "authority": "Department of Home Affairs", "url": "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/employer-nomination-scheme-186", "method": "SharePoint PageSchemaHiddenField JSON", "cadence": "Weekly (VAC on 1 July)", "tracks": "TRT 2-Year (from 482/457 across any approved sponsors), Direct Entry (3-yr exp + Skills Assessment), Base VAC $6,140", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-10-22T12:30:43+10:00", "last_verified_ok": "2026-10-22T12:30:43+10:00", "sha256_prefix": "2a17f1136d9696ae", "content_length": 1294539, "live_method": "https-direct-live"}, {"id": "dha_sesr_494", "category": "DHA Subclass Page", "name_ko": "지방 고용주 스폰서 임시비자 (SESR Subclass 494)", "name_en": "Skilled Employer Sponsored Regional (Provisional) Visa (Subclass 494)", "authority": "Department of Home Affairs", "url": "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-employer-sponsored-regional-494", "method": "SharePoint PageSchemaHiddenField JSON", "cadence": "Weekly", "tracks": "Regional postcode eligibility, 3-yr work exp (unless DAMA concession), PR 191 pathway after 3 yrs, Base VAC $6,140", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-10-22T12:30:43+10:00", "last_verified_ok": "2026-10-22T12:30:43+10:00", "sha256_prefix": "27b26233c92d070a", "content_length": 1295274, "live_method": "https-direct-live"}, {"id": "dha_salary_thresholds", "category": "Income Thresholds (F06)", "name_ko": "고용주 스폰서 소득 기준 (CSIT $79,423 · SSIT $146,576) 및 AMSR(IMMI 18/033) 공식 안내", "name_en": "Nomination Salary Thresholds (CSIT & SSIT Indexed 1 July) & AMSR Rules (IMMI 18/033)", "authority": "Department of Home Affairs", "url": "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/nominating-a-position/salary-requirements", "method": "PageSchemaHiddenField JSON + AWOTE Indexation Verification", "cadence": "Annually (1 July AWOTE Indexation)", "tracks": "FY26-27 CSIT $79,423 (up from $76,515 FY25-26 & $73,150 Dec 2024), SSIT $146,576 (up from $141,210), AMSR 2x2 rule", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-10-22T12:30:43+10:00", "last_verified_ok": "2026-10-22T12:30:43+10:00", "sha256_prefix": "e93bbee8341e93c5", "content_length": 1310309, "live_method": "https-direct-live"}, {"id": "abf_sponsor_sanctions_api", "category": "ABF Enforcement API (F02)", "name_ko": "ABF 스폰서 제재 레지스터 (s 140K(4) — 1,842건) 및 금지 고용주 명단 (s 245AYM)", "name_en": "ABF Register of Sanctioned Sponsors (s 140K(4) — 1,842 Records) & Prohibited Employers (s 245AYM)", "authority": "Australian Border Force (CC BY 3.0 AU)", "url": "https://www.abf.gov.au/about-us/what-we-do/sponsor-sanctions/register-of-sanctioned-sponsors", "method": "SharePoint ContextInfo + GetSanctionsData POST JSON API", "cadence": "Daily", "tracks": "1,842 sponsor sanctions (reg 2.79, 2.82, 2.83, 2.84, 2.86 breaches) & s 245AYM prohibited employer declarations", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-10-22T12:30:43+10:00", "last_verified_ok": "2026-10-22T12:30:43+10:00", "sha256_prefix": "c6bbcf8162d5eed8", "content_length": 2815122, "live_method": "https-direct-live"}, {"id": "dha_csol_list", "category": "Legislative Instrument (F04)", "name_ko": "Core Skills Occupation List (CSOL — 456개 직군, LIN 24/089)", "name_en": "Core Skills Occupation List (CSOL — 456 Occupations, LIN 24/089)", "authority": "Federal Register of Legislation", "url": "https://www.legislation.gov.au/F2024L01620/latest/text", "method": "FRL Compilation Store (F2024L01620)", "cadence": "Monthly", "tracks": "456 occupations eligible for SID 482 Core Skills stream and ENS 186 Direct Entry stream", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-10-22T12:30:43+10:00", "last_verified_ok": "2026-10-22T12:30:43+10:00", "sha256_prefix": "48b13fc4d15a0390", "content_length": 29506, "live_method": "frl-legis-store-c3-F2025C01064", "compilation": "3", "register_id": "F2025C01064", "effective_start": "2025-11-07", "clause_count": 8}, {"id": "migration_regs_1994", "category": "Primary Legislation (F04)", "name_ko": "Migration Regulations 1994 — reg 2.72(15) AMSR, reg 2.79~2.87 스폰서 의무, reg 5.19 & 8607", "name_en": "Migration Regulations 1994 — reg 2.72(15) AMSR, reg 2.79–2.87 Obligations, reg 5.19 & 8607", "authority": "Federal Register of Legislation", "url": "https://www.legislation.gov.au/F1996B03551/latest/text", "method": "FRL Compilation Store (F1996B03551)", "cadence": "Monthly", "tracks": "reg 2.72(15) AMSR, reg 2.79-2.87 sponsor obligations, reg 5.19 (ENS 186 TRT 2-yr), Sch 8 Condition 8607 (180/365d)", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-10-22T12:30:43+10:00", "last_verified_ok": "2026-10-22T12:30:43+10:00", "sha256_prefix": "a964fbdacae4f71a", "content_length": 3580174, "live_method": "frl-legis-store-c289-F2026C01017", "compilation": "289", "register_id": "F2026C01017", "effective_start": "2026-10-02", "clause_count": 2599}, {"id": "migration_amendment_2024_sid", "category": "Primary Legislation (F04)", "name_ko": "Migration Amendment (Work Related Visa Conditions) Regulations 2024 — 180/365일 이직 허용", "name_en": "Migration Amendment (Work Related Visa Conditions) Regulations 2024 — 180/365-Day Mobility", "authority": "Federal Register of Legislation", "url": "https://www.legislation.gov.au/F2024L00776/latest/text", "method": "FRL Compilation Store (F2024L00776)", "cadence": "Quarterly", "tracks": "Amends Condition 8107/8607/8608 to allow up to 180 consecutive days and 365 cumulative days between sponsors", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-10-22T12:30:43+10:00", "last_verified_ok": "2026-10-22T12:30:43+10:00", "sha256_prefix": "7fc93927c81bb39a", "content_length": 4868, "live_method": "frl-legis-store-c0-F2024L00776", "compilation": "0", "register_id": "F2024L00776", "effective_start": "2024-06-25", "clause_count": 6}, {"id": "saf_levy_charges_act", "category": "Primary Legislation (F04)", "name_ko": "Migration (Skilling Australians Fund) Charges Regulations 2018 — SAF Levy 산정", "name_en": "Migration (Skilling Australians Fund) Charges Regulations 2018 — SAF Levy Rates", "authority": "Federal Register of Legislation", "url": "https://www.legislation.gov.au/F2018L01092/latest/text", "method": "FRL Compilation Store (F2018L01092)", "cadence": "Quarterly", "tracks": "Turnover <$10M: $1,200/yr (482) & $3,000 (186/494); Turnover >=$10M: $1,800/yr (482) & $5,000 (186/494)", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-10-22T12:30:43+10:00", "last_verified_ok": "2026-10-22T12:30:43+10:00", "sha256_prefix": "f873d3d9388786e6", "content_length": 7515, "live_method": "frl-legis-store-c2-F2024C01233", "compilation": "2", "register_id": "F2024C01233", "effective_start": "2024-12-07", "clause_count": 6}, {"id": "migration_act_245ar", "category": "Primary Legislation (F04)", "name_ko": "Migration Act 1958 (C1958A00062) — s 140K 제재 · s 245AR 비용전가 금지 · s 245AYM 금지 고용주", "name_en": "Migration Act 1958 (C1958A00062) — s 140K Sanctions · s 245AR Recovery Ban · s 245AYM Prohibited Employers", "authority": "Federal Register of Legislation", "url": "https://www.legislation.gov.au/C1958A00062/latest/text", "method": "FRL Compilation Store (C1958A00062)", "cadence": "Quarterly", "tracks": "s 140K(4) public sanction register, s 245AR/245AS sponsorship cost recovery ban, s 245AYM prohibited employer bar", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-10-22T12:30:43+10:00", "last_verified_ok": "2026-10-22T12:30:43+10:00", "sha256_prefix": "22cc03a0b0a72db0", "content_length": 1747244, "live_method": "frl-legis-store-c172-C2026C00461", "compilation": "172", "register_id": "C2026C00461", "effective_start": "2026-10-08", "clause_count": 959}, {"id": "dha_visa_pricing_api", "category": "DHA Pricing API", "name_ko": "이민성 비자 신청비 (VAC) 실시간 조회 API (GetPriceList — FY2026-27)", "name_en": "Home Affairs Live Visa Pricing API (GetPriceList — FY2026-27)", "authority": "Department of Home Affairs", "url": "https://immi.homeaffairs.gov.au/_layouts/15/api/data.aspx/GetPriceList", "method": "JSON POST API", "cadence": "Monthly (1 July Indexation)", "tracks": "482 Base $4,015 (18+ $4,015, <18 $1,005); 186 & 494 Base $6,140 (18+ $3,070, <18 $1,535)", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-10-22T12:30:43+10:00", "last_verified_ok": "2026-10-22T12:30:43+10:00", "sha256_prefix": "361fc744ca4e3b96", "content_length": 246288, "live_method": "dha-json-api-post"}, {"id": "dha_processing_times_api", "category": "DHA Processing API", "name_ko": "이민성 비자 심사기간 안내 가이드 (GetProcessingTime — 482/186/494)", "name_en": "Home Affairs Visa Processing Time Guide API (482/186/494)", "authority": "Department of Home Affairs", "url": "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-processing-times/global-visa-processing-times", "method": "JSON API", "cadence": "Monthly", "tracks": "SID 482 Specialist (7-14 days target), Core Skills (~4-8 weeks), ENS 186 TRT/DE (~6-14 months)", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-10-22T12:30:43+10:00", "last_verified_ok": "2026-10-22T12:30:43+10:00", "sha256_prefix": "b7cc60b927616d72", "content_length": 1305333, "live_method": "https-direct-live"}, {"id": "dha_dama_framework", "category": "DHA Labour Agreement", "name_ko": "Designated Area Migration Agreements (DAMA) 13개 지역 협정 안내", "name_en": "Designated Area Migration Agreements (DAMA) Official Overview", "authority": "Department of Home Affairs", "url": "https://immi.homeaffairs.gov.au/visas/working-in-australia/regional-migration/dama", "method": "SharePoint PageSchemaHiddenField JSON", "cadence": "Monthly", "tracks": "90% CSIT concession ($71,481 in FY26-27), Age 50/55 concession, Skill Level 1-5 occupations across 13 regions", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-10-22T12:30:43+10:00", "last_verified_ok": "2026-10-22T12:30:43+10:00", "sha256_prefix": "82a35e899b9a485b", "content_length": 1297925, "live_method": "https-direct-live"}, {"id": "art_nomination_refusal_stats", "category": "ART Nomination & 482 Review Stats", "name_ko": "행정재심기구 (ART) 고용주 노미네이션 거절 폭증 (Working/Skilled 재심의 86.70% = 3,078건) 및 482 인용률(83.33%) 통계", "name_en": "ART Employer Nomination Refusal Surge (86.70% = 3,078 of 3,550 Working/Skilled Lodgements) & 482 Set Aside (83.33%)", "authority": "Administrative Review Tribunal (ART)", "url": "https://www.art.gov.au/sites/default/files/2026-08/Migration-Detailed-Caseload-Statistics-2026-27.pdf", "method": "Official Caseload PDF + Dual-Denominator Validator", "cadence": "Monthly", "tracks": "Employer Nomination Refusals: 3,078 lodged (86.70% of Working/Skilled · 8,598 on-hand · p50 1y 6m) | Subclass 482 Restricted Set Aside: 83.33% (100/120) | DHA Employer Sponsored On-Hand: 69,896", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-10-22T12:30:43+10:00", "last_verified_ok": "2026-10-22T12:30:43+10:00", "sha256_prefix": "824687f99fee4bb1", "content_length": 1051736, "live_method": "art-caseload-pdf-live"}];
  const DEFAULT_ABF_DATA = {"status": "verified_ok", "http_status": 200, "bytes": 2815122, "sha256": "c6bbcf8162d5eed85b1d6e802fd595c292cd352b327d19e84746498b2c3de030", "sha256_prefix": "c6bbcf8162d5eed8", "prohibited_sha256_prefix": "c89948bdd84b989b", "license": "CC BY 3.0 AU (Migration Act 1958 s 140K(4) & s 245AYM Statutory Public Registers)", "total_sanctions": 1842, "active_sanction_bars": 121, "historical_expired_count": 1721, "infringement_notices_count": 183, "prohibited_employers_count": 1, "by_state": {"QLD": 500, "NSW": 444, "VIC": 389, "WA": 272, "SA": 165, "NT": 31, "ACT": 26, "TAS": 15}, "by_obligation": {"2.84": 724, "2.86": 498, "2.83": 358, "2.79": 272, "2.82": 192, "2.84 x 2": 132, "2.79 x 2": 108, "2.86 x 2": 104, "2.87": 66, "2.79 x 3": 58, "2.84 x 3": 52, "2.83 x 2": 50, "2.82 x 2": 48, "2.86 x 3": 37, "2.82 x 3": 27, "2.79 x 4": 22, "2.87 x 2": 20, "2.83 x 3": 13, "2.87C": 12, "2.79 x 8": 12, "2.79 x 6": 11, "2.79 x 5": 11, "2.84 x 4": 11, "2.86 x 4": 10, "2.82 x 4": 9, "2.79 x 9": 9, "2.80": 8, "2.83 x 4": 8, "2.79 x 24": 7, "2.79 x 25": 7, "2.79 x 13": 7, "2.79 x 14": 7, "2.84 x 1": 7, "2.78": 6, "2.84 x 5": 6, "2.79 x 11": 6, "2.79 x 10": 6, "r2.84 x 1": 6, "2.86 x 5": 5, "2.82 x 5": 5, "2.82 x 7": 5, "2.79 x 7": 5, "2.79 x 30": 5, "2.79 x 15": 5, "2.86 x 1": 5, "2.90": 5, "2.87 x 3": 4, "2.79 x 21": 4, "2.87B": 4, "2.79 x 52": 4, "2.79 x 17": 4, "2.79 x 23": 4, "2.86 x 6": 3, "2.82 x 6": 3, "2.84 x 6": 3, "2.82 x 10": 3, "2.79 x 26": 3, "2.79 x 68": 3, "2.79 x 18": 3, "R 2.79 x 1": 3, "2.84 X1": 3, "2.79 x 12": 3, "2.82 x 12": 2, "2.86 x 16": 2, "2.83 x 5": 2, "2.84 x2": 2, "2.79 x 31": 2, "2.84 x 7": 2, "2.82 x 14": 2, "2.82 x 8": 2, "2.79 x 33": 2, "2.79 x 19": 2, "2.86 x 8": 2, "2.79 x 28": 2, "2.79 x 48": 2, "2.84 x 10": 2, "2.79 x 27": 2, "2.83 X1": 2, "2.84 X2": 2, "2.86 X2": 2, "2.83 x 1": 2, "2.83 x 6": 2, "2.87 x 23": 1, "2.82 x 25": 1, "2.86 x 11": 1, "2.86 x 10": 1, "2.84 x 13": 1, "2.80 x 7": 1, "2.84 x 9": 1, "r2.83 x 3": 1, "2.79 x3": 1, "2.87B x 2": 1, "2.79 x 66": 1, "2.82 x 17": 1, "2.79 X 3": 1, "2.84 x 2. 2.87B": 1, "2.79(3) x 13": 1, "2.87C x 3": 1, "2.80 x 2": 1, "2.8": 1, "2.80 x 3": 1, "2.87B x 3": 1, "2.79 x 196": 1, "2.82 x 11": 1, "2.79 x 74": 1, "2.79 x 45": 1, "2.84 x 26": 1, "2.86 x 25": 1, "2.79 x 41": 1, "2.79 x 38": 1, "2.79  x 13": 1, ".2.86": 1, "2.79 x 55": 1, "2.79 x 44": 1, "2.82 x 13": 1, "2.86 x 13": 1, "2.87 x 13": 1, "2.79 x 37": 1, "2.79 x 56": 1, "2.79 x 53": 1, "2.87c": 1, "Regs 2.86 x 2.87": 1, "Regs 2.79 x 62": 1, "Regs 2.79 x 52": 1, "Regs 2.84": 1, "Regs 2.79": 1, "2.79 x 22": 1, "2.82 x 28": 1, "Regs 2.79 x 2": 1, "2.79 x 51": 1, "Regs 2.79 x 28": 1, "2": 1, "Regs 2.86": 1, "Regs 2.79 x 5": 1, "Regs 2.79 x 12": 1, "Reg 2.79 x 1": 1, "Reg 2.86 x 1": 1, "2.85 x 5": 1, "2.79 x 34": 1, "2.86 x 7": 1, "Reg 2.79": 1, "2.79 x 20": 1, "2.79A x 20": 1, "2.84x4": 1, "2.84x2": 1, "2.79A": 1, "2.82 x 2.83 x 2.86 x 2": 1, "2.79 x 32": 1, "r2.79 x 4": 1, "r2.83 x 2": 1, "R 2.82 x 1": 1, "R 2.79 x 3": 1, "R2.79 x 3": 1, "2.79 X 14": 1, "2.90 x 2": 1, "2.79X2": 1, "2.79 X2": 1, "2.83 X2": 1, "2.79 X3": 1, "r2.79 X3": 1, "r2.83 x3": 1, "r2.86 x2": 1, "r2.87 x3": 1, "r2.83 x 1": 1, "r2.86 x 1": 1, "r2.87 x1": 1, "[r2.79-r2.86]": 1, "[r2.79_6]": 1, "2.87 x 26": 1, "2.84  x 1": 1, "2.82 x 1": 1, "2.84 x1": 1, "2.80 x 1": 1, "2.83 x7": 1, "2.79 x 1": 1, "2.83 x 7": 1, "2.87C x 10": 1, "2.79A x 2": 1, "2.84 x 8": 1, "2.87 x 10": 1, "2.83 x 8": 1, "2.79 X 2": 1, "2.79 x 16": 1, "2.87C x 1": 1, "2.79 x 86": 1}, "by_sanction_type": {"Sanction bar": 647, "Sponsorship cancelled and sanction bar": 383, "Sponsorship cancelled": 325, "Sponsorship Cancelled": 104, "Unsatisfactory - Sponsorship Cancelled": 94, "Sanction Bar": 85, "Sanction bar and infringement notice": 55, "Infringement notice": 47, "Unsatisfactory - Sanction Bar": 30, "Sponsorship cancelled, sanction bar and infringement notice": 27, "Sponsorship Cancelled and Sanction Bar": 12, "Other": 7, "Sanction bar (waived)": 4, "Sponsorship Cancelled and sanction bar": 4, "Bar": 4, "Infringement Notice": 2, "Cancellation + Bar": 2, "Sponsorship Cancelled, sanction bar and infringement notice": 1, "sponsorship cancelled": 1, "Unsatisfactory - Sponsorship cancelled and sanction Bar": 1, "Sponsorship cancelled and infringement notice": 1, "Sanction Bar and infringement notice": 1, "Unsatisfactory - Sanction Bar and infringement notice": 1, "sanction bar (waived)": 1, "Sponsor Ship Cancelled": 1, "Sanction Imposed": 1, "Sponsorship cancelled and sactioned bar": 1}, "prohibited_employers": [{"legal_name": "Eatalian Deli (WA) Pty Ltd", "trading_name": "EATALIAN RISTORANTE", "abn": "68660788885", "state": "WA", "postcode": "6071", "reason": "The person is subject to a migrant worker sanction", "imposed_date": "24-Sep-2025", "end_date": "24-Sep-2030"}], "recent_sanctions": [{"sponsor_name": "Ozki Nominees Pty Ltd", "trading_name": "Northern Lawnmower & Chainsaw Specialists", "abn": "76998405049", "state": "WA", "postcode": "6065", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84", "imposed_date": "31-Aug-2026", "imposed_sort": "20260831", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Liz Strempel Pty Ltd", "trading_name": "Strempel Racing", "abn": "77677828027", "state": "WA", "postcode": "6211", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84, 2.86", "imposed_date": "28-Aug-2026", "imposed_sort": "20260828", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "PIO'S (WA) Pty Ltd", "trading_name": "Birraz", "abn": "37626785260", "state": "WA", "postcode": "6016", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84", "imposed_date": "28-Aug-2026", "imposed_sort": "20260828", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Gaurish Pty Ltd", "trading_name": "Indian Chimney Albury", "abn": "79161372354", "state": "NSW", "postcode": "2640", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.78, 2.79 x 4, 2.83, 2.87C", "imposed_date": "27-Aug-2026", "imposed_sort": "20260827", "end_date": "27-Aug-2031", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Amelia Park Holdings Pty Ltd", "trading_name": "Busselton Villas and Caravan Park", "abn": "31068281738", "state": "WA", "postcode": "6280", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84, 2.86", "imposed_date": "26-Aug-2026", "imposed_sort": "20260826", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Ipan Interiors Pty Ltd", "trading_name": "Ipan Interiors Pty Ltd", "abn": "64464588966", "state": "ACT", "postcode": "2609", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.86", "imposed_date": "21-Aug-2026", "imposed_sort": "20260821", "end_date": "21-Apr-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "J S Gharial Pty Ltd", "trading_name": "A2Z Interiors", "abn": "89635817846", "state": "VIC", "postcode": "3076", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.86", "imposed_date": "13-Aug-2026", "imposed_sort": "20260813", "end_date": "30-Jul-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "B B Q Factory Pty Limited", "trading_name": "B B Q Factory Pty Limited", "abn": "12054609657", "state": "NSW", "postcode": "2128", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.79", "imposed_date": "13-Aug-2026", "imposed_sort": "20260813", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "133 Kingston Pty Ltd", "trading_name": "Dockside Kingston Cafe", "abn": "33611936737", "state": "ACT", "postcode": "2604", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.86, 2.87", "imposed_date": "11-Aug-2026", "imposed_sort": "20260811", "end_date": "11-Aug-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "TYGR Group Pty Ltd", "trading_name": "Vanilla Pod Food & Espresso Bar", "abn": "52645763686", "state": "NSW", "postcode": "2650", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 4, 2.83 x 2, 2.87 x 2", "imposed_date": "10-Aug-2026", "imposed_sort": "20260810", "end_date": "10-Aug-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Thai Frenzy Pty Ltd", "trading_name": "Thai Frenzy Pty Ltd", "abn": "43101926729", "state": "QLD", "postcode": "4556", "sanction_imposed": "Sanction bar", "obligations_breached": "2.83, 2.87", "imposed_date": "10-Aug-2026", "imposed_sort": "20260810", "end_date": "10-Aug-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Taxi Stop Pty Ltd*", "trading_name": "Select Automotive Repairers", "abn": "67160853538", "state": "VIC", "postcode": "3058", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.86", "imposed_date": "07-Aug-2026", "imposed_sort": "20260807", "end_date": "07-Feb-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Bayside Traders Pty Ltd*", "trading_name": "Midas Frankston", "abn": "73666016119", "state": "VIC", "postcode": "3199", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.86", "imposed_date": "07-Aug-2026", "imposed_sort": "20260807", "end_date": "07-Aug-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Eurolink Pty Limited", "trading_name": "ILVE Appliances", "abn": "50001473347", "state": "NSW", "postcode": "2040", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84, 2.86", "imposed_date": "07-Aug-2026", "imposed_sort": "20260807", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Floor Gallery ACT Pty Ltd", "trading_name": "InRugs", "abn": "36630175003", "state": "ACT", "postcode": "2609", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.86", "imposed_date": "06-Aug-2026", "imposed_sort": "20260806", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Jadoon Group Pty Ltd*", "trading_name": "A.J. Service Centre", "abn": "31616339078", "state": "VIC", "postcode": "3058", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 17", "imposed_date": "04-Aug-2026", "imposed_sort": "20260804", "end_date": "04-Aug-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "XYHHY Reinforcement Pty Ltd", "trading_name": "XYHHY Reinforcement", "abn": "15673506771", "state": "NSW", "postcode": "2113", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84, 2.86, 2.87", "imposed_date": "30-Jul-2026", "imposed_sort": "20260730", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "The Athena School Limited", "trading_name": "The Athena School", "abn": "34630740886", "state": "NSW", "postcode": "2042", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79", "imposed_date": "30-Jul-2026", "imposed_sort": "20260730", "end_date": "30-Jul-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "J S Gharial Pty Ltd", "trading_name": "A2Z Interiors", "abn": "89 635 817 846", "state": "VIC", "postcode": "3076", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.86", "imposed_date": "30-Jul-2026", "imposed_sort": "20260730", "end_date": "30-Jul-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "ARB Corporation Limited", "trading_name": "ARB", "abn": "31006708756", "state": "VIC", "postcode": "3137", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.86 x 16", "imposed_date": "30-Jul-2026", "imposed_sort": "20260730", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "The Momos Pty Ltd", "trading_name": "The Momos", "abn": "74664686131", "state": "NSW", "postcode": "2077", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.86", "imposed_date": "29-Jul-2026", "imposed_sort": "20260729", "end_date": "29-Jul-2030", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "S & D. D Trading Pty Ltd", "trading_name": "Missing Spoon", "abn": "96165036055", "state": "NSW", "postcode": "2060", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 3, 2.84, 2.86, 2.87 x 3", "imposed_date": "24-Jul-2026", "imposed_sort": "20260724", "end_date": "24-Jul-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Niugini Arabica Pty Limited", "trading_name": "Niugini Arabica", "abn": "80151736668", "state": "ACT", "postcode": "2611", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.86", "imposed_date": "22-Jul-2026", "imposed_sort": "20260722", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "M Kontos & P Kontos", "trading_name": "Paragon Cafe", "abn": "18547411282", "state": "NSW", "postcode": "2580", "sanction_imposed": "Sanction bar", "obligations_breached": "2.86", "imposed_date": "13-Jul-2026", "imposed_sort": "20260713", "end_date": "13-Jan-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Crazy Parts Pty Ltd", "trading_name": "Crazy Parts", "abn": "73633614936", "state": "NSW", "postcode": "2116", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79, 2.86 x 2, 2.87", "imposed_date": "09-Jul-2026", "imposed_sort": "20260709", "end_date": "07-Nov-2029", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Fortune Cloud Tech Pty Ltd", "trading_name": "Fortune Cloud Tech SA", "abn": "35644850297", "state": "VIC", "postcode": "3220", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 18", "imposed_date": "09-Jul-2026", "imposed_sort": "20260709", "end_date": "19-Mar-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Aarbees Pty Ltd.", "trading_name": "Aarbees Australia", "abn": "96653941121", "state": "VIC", "postcode": "3220", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 12", "imposed_date": "09-Jul-2026", "imposed_sort": "20260709", "end_date": "09-Jul-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "The Brindle Whippet Pty Ltd", "trading_name": "The Hatter And The Hare", "abn": "98674567045", "state": "VIC", "postcode": "3153", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.86", "imposed_date": "07-Jul-2026", "imposed_sort": "20260707", "end_date": "07-Jul-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Expert  Care Services Pty Ltd", "trading_name": "Expert Care Services", "abn": "79640879054", "state": "NSW", "postcode": "2747", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 6, 2.82 x 2, 2.83 x 3, 2.86 x 3", "imposed_date": "06-Jul-2026", "imposed_sort": "20260706", "end_date": "06-Jul-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Marchem Automotive Pty Ltd*", "trading_name": "Marchem Automotive Pty Ltd", "abn": "89104146250", "state": "VIC", "postcode": "3012", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 86, 2.86 x 2", "imposed_date": "02-Jul-2026", "imposed_sort": "20260702", "end_date": "02-Jul-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "DELIVERY CENTRIC TECHNOLOGY SERVICES PTY LTD", "trading_name": "Delivery Centric Technology Services Pty Ltd", "abn": "21121762294", "state": "VIC", "postcode": "3008", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.86 x 3", "imposed_date": "16-Jun-2026", "imposed_sort": "20260616", "end_date": "16-Jun-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "THE FIFTH POT PTY LTD", "trading_name": "BALANCE THAI", "abn": "44614796913", "state": "NSW", "postcode": "2092", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 3, 2.82, 2.83, 2.86", "imposed_date": "05-Jun-2026", "imposed_sort": "20260605", "end_date": "05-Jun-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "HAGEN'S OPS PTY LTD", "trading_name": "HAGEN'S ORGANICS", "abn": "83651108913", "state": "VIC", "postcode": "3121", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.79 x 17, 2.84, 2.86", "imposed_date": "05-Jun-2026", "imposed_sort": "20260605", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Hillside Brae Pty Ltd", "trading_name": "Greenhill Aged Care", "abn": "41132458434", "state": "NSW", "postcode": "2525", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.87 x 2", "imposed_date": "03-Jun-2026", "imposed_sort": "20260603", "end_date": "03-Dec-2026", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "YSVK HOSPITALITY PTY LTD", "trading_name": "Swagath Foods", "abn": "92635784655", "state": "NSW", "postcode": "2145", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 12, 2.83", "imposed_date": "02-Jun-2026", "imposed_sort": "20260602", "end_date": "02-Jun-2031", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "NABO'S WOODFIRE PIZZA PTY. LTD.", "trading_name": "CASANOVA TORONTO", "abn": "33629243581", "state": "NSW", "postcode": "2283", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 8, 2.83 x 3, 2.86 x 3, 2.87C x 1", "imposed_date": "08-May-2026", "imposed_sort": "20260508", "end_date": "08-Feb-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "JFF Cafe Sorrento Pty Ltd", "trading_name": "The Vanilla Slice Cafe", "abn": "99618533663", "state": "VIC", "postcode": "3943", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.83", "imposed_date": "08-May-2026", "imposed_sort": "20260508", "end_date": "08-May-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Marrybrown Australia Pty Ltd*", "trading_name": "Marrybrown Australia", "abn": "61659451037", "state": "VIC", "postcode": "3171", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.86", "imposed_date": "05-May-2026", "imposed_sort": "20260505", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Mangat Builders Pty Ltd", "trading_name": "Image Homes Vic", "abn": "20643708945", "state": "VIC", "postcode": "3630", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 16, 2.83, 2.86 x 2", "imposed_date": "28-Apr-2026", "imposed_sort": "20260428", "end_date": "28-Apr-2029", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "CHATKAZZ PTY LTD*", "trading_name": "Chatkazz Harris Park", "abn": "59160330156", "state": "NSW", "postcode": "2150", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 3, 2.86", "imposed_date": "17-Apr-2026", "imposed_sort": "20260417", "end_date": "17-Jan-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Indian Sweets Pty Ltd", "trading_name": "Tripat Indian Sweets", "abn": "31675331389", "state": "WA", "postcode": "6210", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.79 x 8, 2.83", "imposed_date": "17-Apr-2026", "imposed_sort": "20260417", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Task National Pty Ltd", "trading_name": "Task National Group", "abn": "33004405606", "state": "VIC", "postcode": "3047", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 3, 2.83, 2.84", "imposed_date": "01-Apr-2026", "imposed_sort": "20260401", "end_date": "01-Apr-2029", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "AYA CONSTRUCTIONS PTY LTD", "trading_name": "AYA CONSTRUCTIONS PTY LTD", "abn": "12617860189", "state": "NSW", "postcode": "2193", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79, 2.86", "imposed_date": "31-Mar-2026", "imposed_sort": "20260331", "end_date": "01-Jul-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Keyalike Services Pty Ltd", "trading_name": "Keyalike Services Pty Ltd", "abn": "64646729633", "state": "VIC", "postcode": "3161", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.83", "imposed_date": "27-Mar-2026", "imposed_sort": "20260327", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "RALIFAH MEDICAL CENTRE PTY LTD", "trading_name": "RALIFAH MEDICAL CENTRE", "abn": "89676822487", "state": "NSW", "postcode": "2680", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.83, 2.86", "imposed_date": "24-Mar-2026", "imposed_sort": "20260324", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "T&Q INTERIOR SOLUTIONS PTY LTD", "trading_name": "T&Q INTERIOR SOLUTIONS", "abn": "49634918577", "state": "ACT", "postcode": "2611", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79", "imposed_date": "04-Mar-2026", "imposed_sort": "20260304", "end_date": "07-Feb-2030", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "MASALA FOODS PTY. LTD.", "trading_name": "MASALA HUT", "abn": "70649535937", "state": "QLD", "postcode": "4350", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 3, 2.84", "imposed_date": "25-Feb-2026", "imposed_sort": "20260225", "end_date": "25-May-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Brown Boys Geraldton Pty Ltd", "trading_name": "Brown Boys Curry House Geraldton", "abn": "93650702775", "state": "WA", "postcode": "6530", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84 x 2", "imposed_date": "24-Feb-2026", "imposed_sort": "20260224", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "TOWIES AUSTRALIA PTY LTD", "trading_name": "TOWIES AUSTRALIA PTY LTD", "abn": "23657501132", "state": "NSW", "postcode": "2766", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79, 2.84, 2.86", "imposed_date": "23-Feb-2026", "imposed_sort": "20260223", "end_date": "23-Feb-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Port Adelaide Lone Star Pty Ltd", "trading_name": "Lone Star Rib House and Brews", "abn": "29657454254", "state": "SA", "postcode": "5006", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 2, 2.82, 2.83, 2.84, 2.86", "imposed_date": "23-Feb-2026", "imposed_sort": "20260223", "end_date": "23-Jun-2029", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Hany Pty Ltd", "trading_name": "Physio Cure", "abn": "22752536602", "state": "VIC", "postcode": "3184", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 15, 2.83, 2.87 x 2", "imposed_date": "19-Feb-2026", "imposed_sort": "20260219", "end_date": "19-Feb-2031", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "AUSSIE CUSTOM HOMES PTY LTD", "trading_name": "AUSSIE CUSTOM HOMES PTY LTD", "abn": "29628125379", "state": "NSW", "postcode": "2765", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79, 2.84, 2.86, 2.87, 2.87C", "imposed_date": "18-Feb-2026", "imposed_sort": "20260218", "end_date": "18-Feb-2031", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "NAWOC HOLDINGS PTY LTD", "trading_name": "BumperTech South and North", "abn": "79156623335", "state": "QLD", "postcode": "4207", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79, 2.84, 2.87", "imposed_date": "13-Feb-2026", "imposed_sort": "20260213", "end_date": "13-Aug-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "PORTER HOUSE HOSPITALITY GROUP PTY LTD*", "trading_name": "PORTER HOUSE", "abn": "27632676334", "state": "NSW", "postcode": "2630", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 X 2, 2.84 x 3", "imposed_date": "06-Feb-2026", "imposed_sort": "20260206", "end_date": "06-Aug-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "OOI Trading Pty Ltd", "trading_name": "Taste of Malaysia Hobart", "abn": "35650978395", "state": "TAS", "postcode": "7000", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.79 x 27, 2.86", "imposed_date": "06-Feb-2026", "imposed_sort": "20260206", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "JENUINE FOODS GLOBAL PTY LTD", "trading_name": "Wagyu-Ya on Chevron", "abn": "68151462770", "state": "QLD", "postcode": "4215", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.83, 2.84, 2.86", "imposed_date": "03-Feb-2026", "imposed_sort": "20260203", "end_date": "03-Aug-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "T & T Metro Pty Ltd", "trading_name": "Metro Bakery and Cafe", "abn": "33802759739", "state": "SA", "postcode": "5290", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.83", "imposed_date": "02-Feb-2026", "imposed_sort": "20260202", "end_date": "02-May-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "THE TAMWORTH PTY LIMITED", "trading_name": "The Tamworth Hotel", "abn": "33109659382", "state": "NSW", "postcode": "2340", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 2, 2.83 x 4", "imposed_date": "23-Jan-2026", "imposed_sort": "20260123", "end_date": "23-Jul-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "WEST CONCORD AGGREGATE PTY. LTD", "trading_name": "WEST CONCORD AGGREGATE PTY. LTD", "abn": "55060922910", "state": "NSW", "postcode": "2075", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 3, 2.82, 2.83 x 8", "imposed_date": "14-Jan-2026", "imposed_sort": "20260114", "end_date": "14-Jan-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "MICRON ELECTRICAL SERVICES PTY LTD*", "trading_name": "Micron Electric Services", "abn": "88082435470", "state": "NSW", "postcode": "2000", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 2, 2.83", "imposed_date": "08-Jan-2026", "imposed_sort": "20260108", "end_date": "08-Apr-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Smart Vision Construction Pty Ltd", "trading_name": "Smart Vision Construction Pty Ltd", "abn": "41657155407", "state": "VIC", "postcode": "3076", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.86 x 2", "imposed_date": "22-Dec-2025", "imposed_sort": "20251222", "end_date": "22-Dec-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "NS SEAFOOD SUPPLIES PTY LTD", "trading_name": "Northside Seafood Suppliers", "abn": "29517979894", "state": "NSW", "postcode": "2009", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 2, 2.86 x 2", "imposed_date": "19-Dec-2025", "imposed_sort": "20251219", "end_date": "19-Dec-2026", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "JORDANS SEAFOOD PTY LTD", "trading_name": "Jordon's", "abn": "70250705810", "state": "NSW", "postcode": "2000", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.86", "imposed_date": "15-Dec-2025", "imposed_sort": "20251215", "end_date": "30-Jun-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "KSPA GROUP PTY LTD", "trading_name": "Raj's Corner Cooks Hill", "abn": "62667428364", "state": "NSW", "postcode": "2300", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.78, 2.79 x 4, 2.82 x 3, 2.83, 2.86", "imposed_date": "11-Dec-2025", "imposed_sort": "20251211", "end_date": "11-Dec-2030", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "RAJ'S CORNER PTY LTD", "trading_name": "RAJ'S CORNER HAMILTON", "abn": "29158705269", "state": "NSW", "postcode": "2303", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.84 x 2", "imposed_date": "11-Dec-2025", "imposed_sort": "20251211", "end_date": "11-Dec-2030", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "DARBY RAJ PTY LTD", "trading_name": "Darby Raj", "abn": "35158705232", "state": "NSW", "postcode": "2300", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.84 x 2", "imposed_date": "11-Dec-2025", "imposed_sort": "20251211", "end_date": "11-Dec-2030", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "RAJ'S CORNER HAMILTON PTY LTD", "trading_name": "Rajs Corner", "abn": "15669727333", "state": "NSW", "postcode": "2303", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.78, 2.79 x 14, 2.82 x 3, 2.83, 2.86 x 2", "imposed_date": "11-Dec-2025", "imposed_sort": "20251211", "end_date": "11-Dec-2030", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "KSS RESTAURANT GROUP PTY LTD", "trading_name": "RAJ'S CORNER GLENDALE", "abn": "58096372217", "state": "NSW", "postcode": "2285", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.84 x 2", "imposed_date": "11-Dec-2025", "imposed_sort": "20251211", "end_date": "11-Dec-2030", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "SHOW TILE PTY LTD", "trading_name": "TILECLUB", "abn": "17156541641", "state": "NSW", "postcode": "2200", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 2", "imposed_date": "10-Dec-2025", "imposed_sort": "20251210", "end_date": "10-Dec-2026", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "PREETHI INTERNATIONAL PTY LTD", "trading_name": "ONE PENNY BLACK", "abn": "37165787146", "state": "NSW", "postcode": "2300", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 2", "imposed_date": "09-Dec-2025", "imposed_sort": "20251209", "end_date": "09-Dec-2026", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Neupane Pty Ltd", "trading_name": "Cafe Moka", "abn": "75636417108", "state": "WA", "postcode": "6210", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.83, 2.84", "imposed_date": "04-Dec-2025", "imposed_sort": "20251204", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "CAPRICORN ENGINEERING SERVICES PTY LTD", "trading_name": "Capricorn Engineering Services", "abn": "45151251624", "state": "NSW", "postcode": "2164", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79, 2.84, 2.87", "imposed_date": "03-Dec-2025", "imposed_sort": "20251203", "end_date": "03-Dec-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Spirou Seafood and Salad Pty Ltd", "trading_name": "Spirou Seafood and Salad", "abn": "75121756483", "state": "SA", "postcode": "5540", "sanction_imposed": "Sanction bar", "obligations_breached": "2.83", "imposed_date": "28-Nov-2025", "imposed_sort": "20251128", "end_date": "26-Feb-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "AUSTATE ENTERPRISES PTY LTD", "trading_name": "Austate Services", "abn": "99601640206", "state": "NSW", "postcode": "2566", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 2, 2.84 x 8", "imposed_date": "25-Nov-2025", "imposed_sort": "20251125", "end_date": "25-Feb-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "LOS DOS HOMBRES PTY. LTD*", "trading_name": "LOS DOS HOMBRES PTY LTD", "abn": "80612462174", "state": "NSW", "postcode": "2261", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.79, 2.86", "imposed_date": "19-Nov-2025", "imposed_sort": "20251119", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "KINN GREEN HILLS PTY LTD", "trading_name": "Kinn Thai Restaurant", "abn": "64619458105", "state": "NSW", "postcode": "2323", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 2", "imposed_date": "19-Nov-2025", "imposed_sort": "20251119", "end_date": "19-May-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "TLC NURSING AGENCY PTY LTD", "trading_name": "TLC NURSING AGENCY", "abn": "44629211150", "state": "NSW", "postcode": "2131", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 4, 2.86 x 4, 2.87 x 10", "imposed_date": "18-Nov-2025", "imposed_sort": "20251118", "end_date": "20-Jun-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "KOKO AMUSEMENT PTY LTD", "trading_name": "Koko Amusement", "abn": "51639366680", "state": "NSW", "postcode": "2000", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 2, 2.84, 2.86", "imposed_date": "17-Nov-2025", "imposed_sort": "20251117", "end_date": "17-Nov-2026", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "PARAGROVE PTY LTD", "trading_name": "BAKERS DELIGHT TAMWORTH", "abn": "26064008064", "state": "NSW", "postcode": "2340", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 6, 2.82", "imposed_date": "17-Nov-2025", "imposed_sort": "20251117", "end_date": "17-May-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Jammu Breweries Pty Ltd", "trading_name": "Bootleg Brewery", "abn": "99670308479", "state": "WA", "postcode": "6280", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84 x 2", "imposed_date": "11-Nov-2025", "imposed_sort": "20251111", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Slices (Pizza By The Slice) Pty Ltd", "trading_name": "Slices Keilor", "abn": "71989662097", "state": "VIC", "postcode": "3036", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 5, 2.86 x 2", "imposed_date": "10-Nov-2025", "imposed_sort": "20251110", "end_date": "10-Nov-2029", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "M&SA TRADING PTY LTD*", "trading_name": "New River Edge Indian Cuisine", "abn": "89163654617", "state": "NSW", "postcode": "2448", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 2, 2.82 x 2, 2.83 x 4", "imposed_date": "07-Nov-2025", "imposed_sort": "20251107", "end_date": "13-Oct-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Abdullah Corporation Pty Ltd and Cannalonga Corporation Pty Ltd", "trading_name": "Slices (Caroline Springs)", "abn": "55324258122", "state": "VIC", "postcode": "3023", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 25, 2.86 x 2, 2.87", "imposed_date": "06-Nov-2025", "imposed_sort": "20251106", "end_date": "06-Nov-2029", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "DINESH CORPORATION PTY LTD*", "trading_name": "BLUE FLAME INDIAN RESTAURANT", "abn": "66154707696", "state": "NSW", "postcode": "2333", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 2, 2.84, 2.86", "imposed_date": "05-Nov-2025", "imposed_sort": "20251105", "end_date": "05-Nov-2026", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "THE FREEDOM ROOM PTY LTD", "trading_name": "The Freedom Room Pty Ltd", "abn": "51651079695", "state": "QLD", "postcode": "4034", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.83 x 2, 2.86", "imposed_date": "03-Nov-2025", "imposed_sort": "20251103", "end_date": "03-Nov-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "SUNRISE & CO SERVICE PTY LTD", "trading_name": "MASSAGE PHILOSOPHY", "abn": "19663953967", "state": "QLD", "postcode": "4558", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79A x 2", "imposed_date": "29-Oct-2025", "imposed_sort": "20251029", "end_date": "29-Jan-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Star of Siam Thai Restaurant Pty Ltd", "trading_name": "Star of Siam Thai Restaurant", "abn": "84100645029", "state": "TAS", "postcode": "7250", "sanction_imposed": "Sanction bar", "obligations_breached": "2.82", "imposed_date": "17-Oct-2025", "imposed_sort": "20251017", "end_date": "24-Oct-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Thai Thyme Erina Pty Ltd", "trading_name": "Thai Thyme Erina Pty Ltd", "abn": "40658989345", "state": "NSW", "postcode": "2250", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.79 x 8, 2.82 x 3, 2.83, 2.84, 2.86, 2.87C", "imposed_date": "14-Oct-2025", "imposed_sort": "20251014", "end_date": "14-Oct-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "AIRA AUS PTY LTD", "trading_name": "AIRA AUS PTY LTD", "abn": "66654167861", "state": "VIC", "postcode": "3805", "sanction_imposed": "Sponsorship cancelled, sanction bar and infringement notice", "obligations_breached": "2.83 x 2, 2.84 x 2, 2.86 x 2", "imposed_date": "14-Oct-2025", "imposed_sort": "20251014", "end_date": "14-Oct-2030", "is_active": true, "infringement_amount": "$150, 240.00"}, {"sponsor_name": "Sunshine Family Pty Ltd", "trading_name": "Jin's Place", "abn": "29649686877", "state": "NSW", "postcode": "2515", "sanction_imposed": "Sanction bar", "obligations_breached": "2.87", "imposed_date": "07-Oct-2025", "imposed_sort": "20251007", "end_date": "07-Jan-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Australian Academy of Nursing Pty Ltd", "trading_name": "Australian College of Studies Co.", "abn": "63079823199", "state": "NSW", "postcode": "2150", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79, 2.86", "imposed_date": "03-Oct-2025", "imposed_sort": "20251003", "end_date": "03-Oct-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Toro Robatayaki Pty Ltd", "trading_name": "Toro Robata Sushi", "abn": "56628131911", "state": "NSW", "postcode": "2500", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 3", "imposed_date": "02-Oct-2025", "imposed_sort": "20251002", "end_date": "02-Apr-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "NCR Beaumont Pty Ltd*", "trading_name": "Blooming Garden Beaumont", "abn": "42632774406", "state": "NSW", "postcode": "2303", "sanction_imposed": "Sanction bar", "obligations_breached": "2.82, 2.83, 2.86", "imposed_date": "29-Sep-2025", "imposed_sort": "20250929", "end_date": "29-Sep-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Y&H Company Pty Ltd", "trading_name": "Hungry Bird Restaurant", "abn": "22668695430", "state": "TAS", "postcode": "7320", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.86", "imposed_date": "19-Sep-2025", "imposed_sort": "20250919", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "PP&P Investments Pty Ltd*", "trading_name": "Oishii Pokolbin", "abn": "25114198980", "state": "NSW", "postcode": "2325", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79, 2.86", "imposed_date": "17-Sep-2025", "imposed_sort": "20250917", "end_date": "17-Sep-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "OMC Canning Vale Pty Ltd", "trading_name": "Olympic Medical Center Canning Vale", "abn": "20870871205", "state": "WA", "postcode": "6155", "sanction_imposed": "Sanction bar", "obligations_breached": "2.83 x 4, 2.84", "imposed_date": "12-Sep-2025", "imposed_sort": "20250912", "end_date": "12-Dec-2025", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "QACO Pty Ltd", "trading_name": "Qaco Pty Ltd", "abn": "15163267936", "state": "NSW", "postcode": "2148", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 10, 2.82 x 6, 2.83 x 7, 2.84 x 3, 2.86 x 2, 2.87C x 10", "imposed_date": "12-Sep-2025", "imposed_sort": "20250912", "end_date": "12-Sep-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "NRY Investment Pty Ltd", "trading_name": "La Cuchina di Vino", "abn": "15603845950", "state": "NSW", "postcode": "2478", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84", "imposed_date": "02-Sep-2025", "imposed_sort": "20250902", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "THANA GROUP PTY LTD", "trading_name": "Sticky Rice Thai", "abn": "90640013985", "state": "NSW", "postcode": "2293", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 1, 2.86 x 1", "imposed_date": "29-Aug-2025", "imposed_sort": "20250829", "end_date": "14-Dec-2025", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "ZEXPO PTY LTD", "trading_name": "Fusion Asia Glenelg", "abn": "11648808244", "state": "SA", "postcode": "5045", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.83, 2.84 x 2, 2.86", "imposed_date": "27-Aug-2025", "imposed_sort": "20250827", "end_date": "27-Aug-2030", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "M & S Tanner Pty Ltd", "trading_name": "Thai Ginger Express", "abn": "61284585693", "state": "QLD", "postcode": "4509", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79, 2.83 x 2, 2.84, 2.86", "imposed_date": "21-Aug-2025", "imposed_sort": "20250821", "end_date": "20-Aug-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "AB BROTHERS PTY LTD*", "trading_name": "Bakers Delight Lake Haven", "abn": "18604034602", "state": "NSW", "postcode": "2077", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 8, 2.83 x 1", "imposed_date": "15-Aug-2025", "imposed_sort": "20250815", "end_date": "20-May-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "BABA SHRICHAND PTY LTD", "trading_name": "Miss India Restaurant Marsden", "abn": "30637384073", "state": "QLD", "postcode": "4132", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 3, 2.83 x 3", "imposed_date": "15-Aug-2025", "imposed_sort": "20250815", "end_date": "15-Nov-2025", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "KSZ AUTOMOTIVE AND SMASH REPAIRS PTY LTD", "trading_name": "KSZ Motors", "abn": "63655403017", "state": "NSW", "postcode": "2144", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.79 x 2, 2.83, 2.86", "imposed_date": "04-Aug-2025", "imposed_sort": "20250804", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "JL HOLDINGS AUST PTY LTD", "trading_name": "Sushi Edo", "abn": "73661949195", "state": "QLD", "postcode": "4051", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 2, 2.83 x 2, 2.86", "imposed_date": "23-Jul-2025", "imposed_sort": "20250723", "end_date": "23-Jan-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Jetsada Thai Pty Ltd*", "trading_name": "Harbour view Thai Unaderra", "abn": "44609805245", "state": "NSW", "postcode": "2526", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 2, 2.82 x 2, 2.86", "imposed_date": "22-Jul-2025", "imposed_sort": "20250722", "end_date": "22-Jul-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "GREEN CORNER GARDENING PTY LTD", "trading_name": "Green Corner Gardening Pty Ltd", "abn": "36601946141", "state": "NSW", "postcode": "2073", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79, 2.82 x 2, 2.83", "imposed_date": "21-Jul-2025", "imposed_sort": "20250721", "end_date": "07-Sep-2029", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Pablaz Group Pty Ltd*", "trading_name": "SALON 7 HAIR AND BEAUTY", "abn": "4262911993", "state": "VIC", "postcode": "3355", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 5, 2.83, 2.86", "imposed_date": "18-Jul-2025", "imposed_sort": "20250718", "end_date": "17-Jan-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "GENESIS KIAMA PTY LTD", "trading_name": "BY THE SEA KIAMA", "abn": "60658967554", "state": "NSW", "postcode": "2533", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 4, 2.82 x 2, 2.86", "imposed_date": "14-Jul-2025", "imposed_sort": "20250714", "end_date": "14-Jul-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Sedna Automation Pty Ltd", "trading_name": "Sedna Automation Pty Ltd", "abn": "18638104471", "state": "WA", "postcode": "6152", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.84", "imposed_date": "10-Jul-2025", "imposed_sort": "20250710", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "NCDB GROUP PTY LTD", "trading_name": "Dumpling Bar", "abn": "34654016172", "state": "NSW", "postcode": "2304", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79, 2.83, 2.86", "imposed_date": "08-Jul-2025", "imposed_sort": "20250708", "end_date": "08-Jul-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "RIMY MOTELS PTY LTD", "trading_name": "COSTA RICA MOTEL", "abn": "65668154569", "state": "NSW", "postcode": "2431", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79, 2.83, 2.86, 2.87", "imposed_date": "08-Jul-2025", "imposed_sort": "20250708", "end_date": "08-Jul-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "SHRI DHANLAXMI PTY LTD*", "trading_name": "RODNEY MOTOR INN", "abn": "87460294040", "state": "VIC", "postcode": "3629", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.83, 2.86", "imposed_date": "04-Jul-2025", "imposed_sort": "20250704", "end_date": "04-Jul-2027", "is_active": true, "infringement_amount": "$79,200"}, {"sponsor_name": "MS & RS GROUP PTY LTD*", "trading_name": "COURTHOUSE RESTAURANT", "abn": "18647842377", "state": "VIC", "postcode": "3820", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.79 x 9, 2.83, 2.84, 2.86 x 2", "imposed_date": "04-Jul-2025", "imposed_sort": "20250704", "end_date": "02-Jul-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "SAWTELL FOOD CO PTY LTD", "trading_name": "Cafe Treeo Sawtell", "abn": "49615529596", "state": "NSW", "postcode": "2452", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79, 2.82, 2.86", "imposed_date": "30-Jun-2025", "imposed_sort": "20250630", "end_date": "30-Jun-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Lexform Pty Ltd", "trading_name": "Lexform", "abn": "72122352176", "state": "NSW", "postcode": "2199", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.84, 2.86", "imposed_date": "30-Jun-2025", "imposed_sort": "20250630", "end_date": "30-Jun-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "JUST WINES AUSTRALIA PTY LTD", "trading_name": "Just Wines Australia Pty Ltd", "abn": "70156011291", "state": "NSW", "postcode": "2164", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.84, 2.86", "imposed_date": "30-Jun-2025", "imposed_sort": "20250630", "end_date": "30-Sep-2025", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "ZORABAAZ PTY LTD", "trading_name": "SEASIDE SHAHI", "abn": "36666987640", "state": "NSW", "postcode": "2500", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.84", "imposed_date": "30-Jun-2025", "imposed_sort": "20250630", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Lee Massage & Acupuncture Charlestown Pty Ltd*", "trading_name": "Lee Massage & Acupuncture Charlestown", "abn": "20158650090", "state": "NSW", "postcode": "2290", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.78, 2.86", "imposed_date": "24-Jun-2025", "imposed_sort": "20250624", "end_date": "03-Dec-2025", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "WEI & LEONG PTY LTD", "trading_name": "Wok & Grill - Club Windang", "abn": "68180125063", "state": "NSW", "postcode": "2527", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 2, 2.82 x 2, 2.86", "imposed_date": "23-Jun-2025", "imposed_sort": "20250623", "end_date": "07-Nov-2029", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Fateh OZ Pty Ltd*", "trading_name": "Pipeworks Cafe", "abn": "92639454701", "state": "NSW", "postcode": "2444", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 4, 2.82 x 2, 2.83 x7", "imposed_date": "23-Jun-2025", "imposed_sort": "20250623", "end_date": "13-Aug-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "COLOUR CRAFT PTY LTD", "trading_name": "Colour Craft Pty Ltd", "abn": "40605708236", "state": "ACT", "postcode": "2609", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79, 2.82, 2.83, 2.84", "imposed_date": "18-Jun-2025", "imposed_sort": "20250618", "end_date": "18-Jun-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "CARETODANCE PTY LTD", "trading_name": "Caretodance", "abn": "82618260174", "state": "NSW", "postcode": "2039", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.79, 2.87", "imposed_date": "18-Jun-2025", "imposed_sort": "20250618", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Statotech Solutions Pty Ltd", "trading_name": "Statotech Solutions", "abn": "15643790738", "state": "VIC", "postcode": "3220", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.82", "imposed_date": "17-Jun-2025", "imposed_sort": "20250617", "end_date": "17-Jun-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Nickels, Jacinta Emily", "trading_name": "Rejuvenate Physio", "abn": "91798074566", "state": "WA", "postcode": "6112", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.84", "imposed_date": "17-Jun-2025", "imposed_sort": "20250617", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Utility Designs Pty Ltd", "trading_name": "Utility Designs Pty Ltd", "abn": "33648587213", "state": "WA", "postcode": "6005", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.84", "imposed_date": "12-Jun-2025", "imposed_sort": "20250612", "end_date": "06-Dec-2026", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "ZREICON PTY LTD", "trading_name": "ZREICON", "abn": "70647113951", "state": "NSW", "postcode": "2259", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.80", "imposed_date": "06-Jun-2025", "imposed_sort": "20250606", "end_date": "31-Dec-2026", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "CAREER PATH ONE PTY LTD", "trading_name": "Career Path One Pty Ltd", "abn": "66648741682", "state": "NSW", "postcode": "2200", "sanction_imposed": "Sponsorship cancelled and sactioned bar", "obligations_breached": "2.79 x 2, 2.82 x 3, 2.84 x 4, 2.86 x 3", "imposed_date": "04-Jun-2025", "imposed_sort": "20250604", "end_date": "06-Mar-2030", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Olivia Italian Pty Ltd", "trading_name": "Olivia Italian  Pty Ltd", "abn": "36637962451", "state": "QLD", "postcode": "4226", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.84", "imposed_date": "03-Jun-2025", "imposed_sort": "20250603", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "SYDNEY DIRECT FRESH PRODUCE PTY LIMITED", "trading_name": "Sydney Direct Fresh produce", "abn": "40151365007", "state": "NSW", "postcode": "2148", "sanction_imposed": "Sanction Imposed", "obligations_breached": "2.86", "imposed_date": "02-Jun-2025", "imposed_sort": "20250602", "end_date": "01-Feb-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "R.J. Mott Pty Ltd", "trading_name": "Skymirror Gallery", "abn": "20480703854", "state": "VIC", "postcode": "3533", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.83, 2.86", "imposed_date": "22-May-2025", "imposed_sort": "20250522", "end_date": "22-Nov-2025", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "GOTECH SOLUTIONS PTY LTD", "trading_name": "GOSOL", "abn": "65644150943", "state": "NSW", "postcode": "2000", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79, 2.86 x 3", "imposed_date": "20-May-2025", "imposed_sort": "20250520", "end_date": "18-Feb-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Psychological Solutions (Qld) Pty Ltd", "trading_name": "The Health Hub Brisbane East", "abn": "58161515635", "state": "QLD", "postcode": "4178", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.84 x 3, 2.87 x 2", "imposed_date": "19-May-2025", "imposed_sort": "20250519", "end_date": "19-Nov-2026", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Aurora Interactive Pty Ltd", "trading_name": "Aurora Interactive", "abn": "14617430887", "state": "QLD", "postcode": "4211", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.84", "imposed_date": "19-May-2025", "imposed_sort": "20250519", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "TKD World Pty Ltd*", "trading_name": "Taekwondo World", "abn": "13096416743", "state": "NSW", "postcode": "2154", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79, 2.82, 2.87 x 2", "imposed_date": "16-May-2025", "imposed_sort": "20250516", "end_date": "16-May-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Tincone Pty Ltd", "trading_name": "Tincone", "abn": "95078211346", "state": "QLD", "postcode": "4740", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.82, 2.84", "imposed_date": "14-May-2025", "imposed_sort": "20250514", "end_date": "14-Nov-2025", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Good Time Travel Services Pty Ltd*", "trading_name": "GOODTIME TRAVEL", "abn": "58136181201", "state": "NSW", "postcode": "2220", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.79, 2.86, 2.87", "imposed_date": "13-May-2025", "imposed_sort": "20250513", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "LEADER M PTY LTD*", "trading_name": "Leader M", "abn": "69114574122", "state": "NSW", "postcode": "2143", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79, 2.82, 2.83", "imposed_date": "07-May-2025", "imposed_sort": "20250507", "end_date": "18-Jun-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Mantra Properties Pty Ltd", "trading_name": "The Last Straw Café", "abn": "31905856040", "state": "VIC", "postcode": "3630", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 68", "imposed_date": "07-May-2025", "imposed_sort": "20250507", "end_date": "07-Nov-2025", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "ASTAR PERSONNEL PTY LTD*", "trading_name": "ASTAR Recruitment", "abn": "47117073035", "state": "NSW", "postcode": "2150", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.83, 2.86 x 2", "imposed_date": "02-May-2025", "imposed_sort": "20250502", "end_date": "04-Feb-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "M2 SUSTAINABLE SERVICES PTY LTD", "trading_name": "M2 SUSTAINABLE SERVICES PTY LTD", "abn": "92664471103", "state": "NSW", "postcode": "2193", "sanction_imposed": "Sponsor Ship Cancelled", "obligations_breached": "2.84", "imposed_date": "30-Apr-2025", "imposed_sort": "20250430", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Colab Building Tech Pty Ltd", "trading_name": "Colab Building Tech Pty Ltd", "abn": "38632753765", "state": "VIC", "postcode": "3008", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.83", "imposed_date": "30-Apr-2025", "imposed_sort": "20250430", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Sisters Family Pty.Ltd.", "trading_name": "8 Sisters Cafe and Grill", "abn": "88617496009", "state": "VIC", "postcode": "3550", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 10", "imposed_date": "17-Apr-2025", "imposed_sort": "20250417", "end_date": "17-Apr-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "JB FIRM PTY LTD", "trading_name": "Yellowstone Building Group", "abn": "19630138546", "state": "QLD", "postcode": "4035", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.84", "imposed_date": "10-Apr-2025", "imposed_sort": "20250410", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "VAV ENTERPRISES PTY LTD", "trading_name": "EQ CAFE AND LOUNGE", "abn": "95627721475", "state": "ACT", "postcode": "2600", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.86", "imposed_date": "10-Apr-2025", "imposed_sort": "20250410", "end_date": "08-Apr-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "HKR WA Pty Ltd", "trading_name": "Ribs Lane", "abn": "17661848013", "state": "WA", "postcode": "6050", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.84 x 2", "imposed_date": "04-Apr-2025", "imposed_sort": "20250404", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "KONA & CO INSURANCE PTY LTD", "trading_name": "Kona Recruitment", "abn": "17642384576", "state": "QLD", "postcode": "4000", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.84 x 2", "imposed_date": "03-Apr-2025", "imposed_sort": "20250403", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Top Shelf Hospitality Pty Ltd", "trading_name": "The Hampden Hotel", "abn": "32637101743", "state": "WA", "postcode": "6009", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.84 x 3", "imposed_date": "03-Apr-2025", "imposed_sort": "20250403", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Oriental Wok Restaurant Pty Ltd", "trading_name": "Oriental House Chinese Thai Restaurant", "abn": "93603645825", "state": "SA", "postcode": "5070", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 12, 2.82, 2.83, 2.86", "imposed_date": "02-Apr-2025", "imposed_sort": "20250402", "end_date": "02-Apr-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Tango Electrical Pty Ltd", "trading_name": "Tango Electrical", "abn": "31606749062", "state": "NSW", "postcode": "2034", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84", "imposed_date": "31-Mar-2025", "imposed_sort": "20250331", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Baba Deep Singh Transport Pty Ltd", "trading_name": "Attal", "abn": "29164479770", "state": "VIC", "postcode": "3073", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.82, 2.84, 2.86", "imposed_date": "31-Mar-2025", "imposed_sort": "20250331", "end_date": "31-May-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "DEE Contractors Pty Ltd", "trading_name": "DEE Contractors Pty Ltd", "abn": "89168189008", "state": "WA", "postcode": "6108", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84", "imposed_date": "27-Mar-2025", "imposed_sort": "20250327", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "IRIS Group Management Pty Ltd", "trading_name": "Iris Group / Iris Capital / Hotel Steyne", "abn": "70126054251", "state": "NSW", "postcode": "2000", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79, 2.87", "imposed_date": "26-Mar-2025", "imposed_sort": "20250326", "end_date": "26-Jun-2025", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "CUBE4 Security Pty Ltd", "trading_name": "CUBE4 Security Pty Ltd", "abn": "38160209825", "state": "NSW", "postcode": "2200", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79, 2.83 x 6, 2.84 x 2, 2.86", "imposed_date": "24-Mar-2025", "imposed_sort": "20250324", "end_date": "24-Mar-2030", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "El Kamese, Karam Riyad", "trading_name": "Elk Dental Lab", "abn": "41836843032", "state": "NSW", "postcode": "2170", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.79 x 2, 2.82, 2.84, 2.86", "imposed_date": "20-Mar-2025", "imposed_sort": "20250320", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "The Anchor by the Bay Pty Ltd", "trading_name": "The Anchor by the Bay", "abn": "39645512447", "state": "QLD", "postcode": "4163", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84 x 2", "imposed_date": "14-Mar-2025", "imposed_sort": "20250314", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "River Aus Construction Services Pty Ltd", "trading_name": "River Aus Construction Services Pty Ltd", "abn": "37628989793", "state": "QLD", "postcode": "4053", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84 x 2", "imposed_date": "13-Mar-2025", "imposed_sort": "20250313", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Tile Direct Pty Ltd", "trading_name": "Tile Direct Pty Ltd", "abn": "94085987444", "state": "NSW", "postcode": "2263", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.84", "imposed_date": "07-Mar-2025", "imposed_sort": "20250307", "end_date": "06-Mar-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Thynk Co. Pty Ltd", "trading_name": "Thynk Co. Pty Ltd", "abn": "55633770322", "state": "NSW", "postcode": "2322", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 33, 2.82 x 3, 2.84 x 3, 2.86 x 8, 2.87C", "imposed_date": "07-Mar-2025", "imposed_sort": "20250307", "end_date": "16-Feb-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Thynk Group Pty Ltd", "trading_name": "Thynk Group Pty Ltd", "abn": "48132841153", "state": "NSW", "postcode": "2765", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 6, 2.82 x 3, 2.86 x 3, 2.87C", "imposed_date": "06-Mar-2025", "imposed_sort": "20250306", "end_date": "30-Jan-2029", "is_active": true, "infringement_amount": ""}]};

  const STATE = {
    lang: "ko",
    csit: 79423,
    ssit: 146576,
    dama90: 71481,
    fwhit: 190100,
    sources: DEFAULT_SOURCES,
    abf: DEFAULT_ABF_DATA,
    sidData: null
  };

  const I18N = {
    ko: {
      brandTag: "호주 고용주 스폰서 비자 (SID 482 · ENS 186 · SESR 494) & CSIT · 8607 통합 네비게이터",
      pollBtnLabel: "12/12 공식 출처 Live 검증됨",
      topCta: "박앤코 상담·문의하기 →",
      urgentBadge: "FY2026–27 1차 법령 기준 (2026.07.01 시행)",
      urgentText: "Core Skills & ENS 186 최소 연봉(CSIT $79,423) · Specialist Skills(SSIT $146,576) · DAMA 90% 감면($71,481) · SID 482 사전 경력 1년(365일 FTE) · Condition 8607 퇴사 후 연속 180일 / 누적 365일 유예 확정!",
      urgentLink: "s 245AR 비용 전가 금지 및 법령 근거 보기 ↓",
      heroOverline: "EMPLOYER SPONSORED VISA INTELLIGENCE · SID 482 · ENS 186 · SESR 494",
      heroTitle: "호주 고용주 스폰서 비자 (SID 482 · ENS 186 · 494) & CSIT · 8607 통합 네비게이터",
      heroLead: "2024년 12월 7일 출범한 Skills in Demand (SID Subclass 482) 3대 스트림부터 FY2026–27 최신 CSIT($79,423) · SSIT($146,576), 다중 고용주 합산이 허용된 ENS 186 TRT 2년(730일) 영주권 시계, Condition 8607 180일/365일 이직 유예 계산기, 그리고 SAF Levy 법적 분담까지 한 화면에서 정밀 진단하세요.",
      heroBtnCharts: "CSIT/SSIT & 비용 시각화 그래프 ↓",
      heroBtnTrt: "186 TRT 2년(730일) & 482 1년 경력 계산기",
      pillStreams: "1. 482·186·494 스트림 & AMSR 진단",
      pillTrt: "2. 186 TRT 2년 & 482 1년 경력 계산기",
      pill8607: "3. Condition 8607 (180/365일) 이직 시계",
      pillSaf: "4. SAF Levy · VAC · 진단서 출력",
      specName: "박창민 대표변호사 (Chang Min Park)",
      specRole: "QLS Accredited Specialist in Immigration Law",
      specSlogan: "\"삶에 집중하세요, 법률은 저희가 맡겠습니다.\"",
      specMeta: "법무법인 박앤코 (PNC Legal Pty Ltd t/a Park & Co Lawyers · Underwood QLD) | 공식 이메일: enquiry@parkcolawyers.com",
      specCta: "변호사 1:1 고용주 스폰서 상담 신청 →",
      st1Over: "CSIT (CORE SKILLS · 186)",
      st1Sub: "FY26–27 최소 기본급 (슈퍼 별도)",
      st2Over: "SSIT (SPECIALIST 482)",
      st2Sub: "직군 리스트 무관 · 7일 우선심사",
      st3Over: "DAMA 90% CSIT CONCESSION",
      st3Sub: "13개 지정지역 협정 10% 연봉 감면",
      st4Over: "SID 482 · ENS 186 TRT 경력",
      st4Sub: "482: 1년 FTE · 186 TRT: 730일 합산",
      st5Over: "CONDITION 8607 이직 시계",
      st5Sub: "1회 연속 180일 · 비자 누적 365일",
      st6Over: "SAF LEVY (482 연 / 186 일시)",
      st6Sub: "중소기업 기준 (대기업 $1.8k / $5k)",
      sec0_title: "고용주 스폰서 비자 핵심 지표 시각화 대시보드 (3대 차트)",
      sec0_desc: "2013년부터 2026년 7월 1일까지의 최소 연봉(TSMIT → CSIT/SSIT) 인상 추이, 고용주(s 245AR 전가 금지)와 신청자 간 법적 비용 분담 구조, 그리고 482 → 186 TRT 영주권 타임라인을 한눈에 비교합니다.",
      chart1_title: "그래프 1 · TSMIT/CSIT · SSIT · DAMA 90% 최소 연봉 추이 (2013 ~ FY2026–27)",
      chart1_sub: "매년 7월 1일 AWOTE 연동 자동 인상 — 노미네이션 접수일(Lodgement Date) 기준 적용 (슈퍼애뉴에이션 12% 별도).",
      chart2_title: "그래프 2 · 고용주 의무 부담금(SAF Levy·Nomination) vs 신청자 비자비(VAC) 법적 분리 (s 245AR)",
      chart2_sub: "Migration Act s 245AR/245AS에 따라 스폰서십($420)·노미네이션($330/$540)·SAF Levy는 근로자에게 전가·공제할 수 없어요.",
      chart3_title: "그래프 3 · SID 482 (1년 경력) → 이직 유예 (180일/365일) → ENS 186 TRT 영주권 (2년 합산) 구조도",
      chart3_sub: "중간에 스폰서를 변경하더라도 승인된 482 스폰서 아래에서 일한 기간은 모두 186 TRT 2년(730일)에 합산됩니다 (퇴사 공백기 제외).",
      sec1_title: "SID 482 (3개 스트림) · ENS 186 (TRT / DE) · SESR 494 비교 및 연봉(AMSR) 진단",
      sec1_desc: "직군 분류(ANZSCO Major Group)와 제안받은 기본 연봉(Guaranteed Annual Earnings, 슈퍼 제외) 및 호주 현지 시장 연봉(AMSR)을 입력하면 Specialist Skills · Core Skills · DAMA · 186 영주권 적격 여부를 즉시 판정합니다.",
      stream_form_title: "직군 · 제안 연봉 · 시장 연봉(AMSR) 시뮬레이터",
      sm_mg_label: "1. 직군 대분류 (ANZSCO / OSCA Major Group)",
      sm_sal_label: "2. 고용주 제안 연간 보수 (Guaranteed Annual Earnings, AUD)",
      sm_amsr_label: "3. 호주 현지 시장 연봉 (AMSR, AUD)",
      sm_dama_chk: "DAMA (13개 지정지역 이주협정) 지역 내 고용주이며 CSIT 90% 감면($71,481) 대상 직군임",
      stream_result_title: "비자 스트림 적격성 및 연봉(CSIT/SSIT/AMSR) 판정 결과",
      stream_table_title: "호주 고용주 스폰서 6대 비자 스트림 핵심 요건 비교표 (FY2026–27)",
      sec2_title: "ENS 186 TRT 2년(730일) 다중 고용주 합산 & SID 482 1년 경력 정밀 계산기",
      sec2_desc: "2023년 11월 25일 및 2024년 12월 7일 개정에 따라 482 비자는 최근 5년 내 1년(365일 FTE) 경력으로 신청 가능하며, 186 TRT 영주권은 최근 3년 내 다수의 스폰서 아래에서 근무한 기간을 모두 합산하여 총 2년(730일)만 채우면 됩니다.",
      trt_form_title: "근무 기간 · 파트타임 환산 · 무급휴직 입력",
      trt_result_title: "경력 산정 (FTE 일수) 및 186 TRT 적격 판정",
      sec3_title: "Condition 8607 스폰서 퇴사 후 180일(연속) / 365일(누적) 이직 시계 시뮬레이터",
      sec3_desc: "2024년 7월 1일 발효된 Migration Amendment (Work Related Visa Conditions) Regulations 2024 (F2024L00749)에 따라, 482/494 비자 소지자는 기존 스폰서 퇴사 후 1회 연속 최대 180일(비자 전체 기간 누적 최대 365일) 동안 비자 취소 없이 새 스폰서를 찾거나 타 고용주 아래에서 합법적으로 일할 수 있습니다.",
      c8607_form_title: "스폰서 고용 종료일 및 이전 공백일 입력",
      c8607_result_title: "Condition 8607 데드라인 및 합법 근무 가이드",
      sec4_title: "고용주 SAF Levy · 노미네이션 · 비자 신청비(VAC) 통합 계산기 & 원클릭 진단서 출력",
      sec4_desc: "스폰서 기업의 연매출($10M 기준), 스폰서 기간(1~4년), 동반 가족 수를 선택하면 고용주 의무 부담금(s 245AR 전가 금지)과 신청자 비자 신청비(VAC)를 분리 산출합니다.",
      sec5_title: "12개 정부 1차 출처(이민성 · 연방 법령 등록부) 자동 모니터링 대시보드",
      sec5_desc: "본 네비게이터의 모든 수치(CSIT $79,423, SSIT $146,576, SAF Levy, VAC, Condition 8607)는 아래 12개 호주 정부 1차 출처 스냅샷 및 해시(SHA-256)에 기반합니다."
    },
    en: {
      brandTag: "Australia Employer Sponsored Visa (SID 482 · ENS 186 · 494) & CSIT · 8607 Navigator",
      pollBtnLabel: "12/12 Primary Sources Verified",
      topCta: "Book a Consultation →",
      urgentBadge: "FY2026–27 Primary Legislation (Effective 1 July 2026)",
      urgentText: "Core Skills & ENS 186 CSIT ($79,423) · Specialist Skills SSIT ($146,576) · DAMA 90% Concession ($71,481) · SID 482 1-Yr FTE Experience · Condition 8607 180 Consecutive / 365 Cumulative Days Mobility Window!",
      urgentLink: "View s 245AR Cost Recovery Ban & Statutory Rules ↓",
      heroOverline: "EMPLOYER SPONSORED VISA INTELLIGENCE · SID 482 · ENS 186 · SESR 494",
      heroTitle: "Australia Employer Sponsored Visa (SID 482 · ENS 186 · 494) & CSIT · 8607 Navigator",
      heroLead: "From the 3 streams of the Skills in Demand (SID Subclass 482) visa to FY2026–27 CSIT ($79,423) & SSIT ($146,576), multi-employer ENS 186 TRT 2-year (730-day) PR aggregation, the Condition 8607 180/365-day mobility clock, and strict s 245AR SAF Levy separation.",
      heroBtnCharts: "CSIT/SSIT & Cost Charts ↓",
      heroBtnTrt: "186 TRT 2-Yr (730d) & 482 1-Yr Calculator",
      pillStreams: "1. 482·186·494 Streams & AMSR Check",
      pillTrt: "2. 186 TRT 2-Yr & 482 1-Yr FTE Calc",
      pill8607: "3. Condition 8607 (180/365d) Clock",
      pillSaf: "4. SAF Levy · VAC · Brief Export",
      specName: "Chang Min Park | Principal Lawyer",
      specRole: "QLS Accredited Specialist in Immigration Law",
      specSlogan: "\"Focus on your life; we will take care of the law.\"",
      specMeta: "PNC Legal Pty Ltd t/a Park & Co Lawyers (Underwood QLD) | Official Email: enquiry@parkcolawyers.com",
      specCta: "Book a 1:1 Employer Sponsored Consultation →",
      st1Over: "CSIT (CORE SKILLS · 186)",
      st1Sub: "FY26–27 Min Base Salary (Excl. Super)",
      st2Over: "SSIT (SPECIALIST 482)",
      st2Sub: "No Occupation List · 7-Day SLA",
      st3Over: "DAMA 90% CSIT CONCESSION",
      st3Sub: "10% Threshold Concession Across 13 DAMAs",
      st4Over: "SID 482 · ENS 186 TRT EXP",
      st4Sub: "482: 1 Yr FTE · 186 TRT: 730 Days Combined",
      st5Over: "CONDITION 8607 MOBILITY",
      st5Sub: "180 Days Single · 365 Days Cumulative",
      st6Over: "SAF LEVY (482/YR · 186 ONCE)",
      st6Sub: "Small Business (<$10M) · Large $1.8k / $5k",
      sec0_title: "Employer Sponsored Visa Visual Analytics Dashboard (3 Interactive Charts)",
      sec0_desc: "Compare minimum salary indexation (TSMIT → CSIT/SSIT from 2013 to FY2026–27), statutory employer vs applicant cost separation (s 245AR), and the SID 482 → ENS 186 TRT permanent residency pathway.",
      chart1_title: "Chart 1 · TSMIT/CSIT · SSIT · DAMA 90% Salary Threshold Progression (2013 – FY2026–27)",
      chart1_sub: "Indexed annually on 1 July to AWOTE — applies based on Nomination Lodgement Date (excludes 12% Superannuation).",
      chart2_title: "Chart 2 · Employer Mandatory Costs (SAF Levy·Nomination) vs Applicant VAC Separation (s 245AR)",
      chart2_sub: "Under Migration Act ss 245AR/245AS, Sponsorship ($420), Nomination ($330/$540), and SAF Levy CANNOT be passed on to or deducted from the worker.",
      chart3_title: "Chart 3 · SID 482 (1 Yr Exp) → 8607 Mobility (180d/365d) → ENS 186 TRT PR (2 Yrs Combined) Flow",
      chart3_sub: "All full-time sponsored employment periods across multiple approved 482 sponsors count toward the 2-year (730-day) 186 TRT requirement.",
      sec1_title: "SID 482 (3 Streams) · ENS 186 (TRT / DE) · SESR 494 Matrix & Salary (AMSR) Checker",
      sec1_desc: "Enter the ANZSCO/OSCA Major Group, Guaranteed Annual Earnings (excluding Super), and Australian Market Salary Rate (AMSR) to test eligibility across Specialist Skills, Core Skills, DAMA, and Subclass 186 PR.",
      stream_form_title: "Occupation · Offered Salary · AMSR Simulator",
      sm_mg_label: "1. Occupation Major Group (ANZSCO / OSCA)",
      sm_sal_label: "2. Offered Guaranteed Annual Earnings (AUD, Excl. Super)",
      sm_amsr_label: "3. Australian Market Salary Rate (AMSR, AUD)",
      sm_dama_chk: "Regional employer under a DAMA (13 regions) eligible for the 90% CSIT concession ($71,481)",
      stream_result_title: "Visa Stream Eligibility & Salary (CSIT/SSIT/AMSR) Assessment",
      stream_table_title: "6 Employer Sponsored Visa Streams Master Comparison Table (FY2026–27)",
      sec2_title: "ENS 186 TRT 2-Year (730-Day) Multi-Employer & SID 482 1-Year FTE Calculator",
      sec2_desc: "Following the 25 Nov 2023 and 7 Dec 2024 reforms, SID 482 requires 1 year (365 FTE days) of experience in the last 5 years, while ENS 186 TRT aggregates sponsored periods across multiple employers to reach 2 years (730 days) in the last 3 years.",
      trt_form_title: "Employment Duration · Pro-Rata Hours · Unpaid Leave Input",
      trt_result_title: "FTE Days Calculation & 186 TRT / 482 Eligibility Verdict",
      sec3_title: "Condition 8607 (180 Consecutive / 365 Cumulative Days) Mobility Clock Simulator",
      sec3_desc: "Under the Migration Amendment (Work Related Visa Conditions) Regulations 2024 (F2024L00749, effective 1 July 2024), 482/494 holders have up to 180 consecutive days per cessation (and 365 cumulative days per visa grant) to find a new sponsor and may lawfully work for other employers during the gap.",
      c8607_form_title: "Sponsor Cessation Date & Prior Gap Days Input",
      c8607_result_title: "Condition 8607 Deadline & Lawful Interim Work Rights",
      sec4_title: "Employer SAF Levy · Nomination · Applicant VAC Calculator & 1-Click Brief Export",
      sec4_desc: "Select sponsor annual turnover (<$10M vs ≥$10M), visa duration (1–4 yrs), and family members to calculate mandatory Employer Costs (s 245AR) and Applicant VAC.",
      sec5_title: "12 Primary Government Sources Automated Monitoring Dashboard",
      sec5_desc: "Every statutory figure in this navigator (CSIT $79,423, SSIT $146,576, SAF Levy, VAC, Condition 8607) is verified against 12 primary Department of Home Affairs and Federal Register of Legislation sources."
    }
  };

  function fmtAUD(n) {
    return "$" + Math.round(n).toLocaleString("en-AU");
  }

  /* 1. Render SVG Charts (Park & Co 2026 Rebrand Kit Palette) */
  function renderCharts() {
    const en = STATE.lang === "en";
    const salEl = document.getElementById("svg-salary-progression-chart");
    if (salEl) {
      salEl.innerHTML = `
        <svg viewBox="0 0 680 270" width="100%" style="display:block;height:auto;font-family:'Pretendard Variable','Manrope',sans-serif;">
          <rect x="0" y="0" width="680" height="270" rx="10" fill="#FCFAF6"/>
          <line x1="60" y1="215" x2="645" y2="215" stroke="#DED6C8" stroke-width="1.5"/>
          <!-- Group 1: 2013-23 -->
          <rect x="85" y="142" width="44" height="73" rx="5" fill="#7D756D"/>
          <text x="107" y="135" text-anchor="middle" font-size="11" font-weight="700" fill="#2E2E2E">$53,900</text>
          <text x="107" y="235" text-anchor="middle" font-size="11" font-weight="600" fill="#47433E">2013–2023</text>
          <text x="107" y="250" text-anchor="middle" font-size="9.5" fill="#7D756D">${en ? "Frozen TSMIT" : "10년 동결 TSMIT"}</text>

          <!-- Group 2: FY23-24 -->
          <rect x="190" y="120" width="44" height="95" rx="5" fill="#1F5A5E"/>
          <text x="212" y="113" text-anchor="middle" font-size="11" font-weight="700" fill="#1F5A5E">$70,000</text>
          <text x="212" y="235" text-anchor="middle" font-size="11" font-weight="600" fill="#47433E">FY23–24</text>
          <text x="212" y="250" text-anchor="middle" font-size="9.5" fill="#7D756D">1 Jul 2023</text>

          <!-- Group 3: Dec 2024 SID Launch -->
          <rect x="295" y="115" width="36" height="100" rx="5" fill="#7A1F2B"/>
          <rect x="335" y="38" width="36" height="177" rx="5" fill="#B67A1E"/>
          <text x="313" y="108" text-anchor="middle" font-size="10.5" font-weight="700" fill="#7A1F2B">$73,150</text>
          <text x="353" y="31" text-anchor="middle" font-size="10.5" font-weight="700" fill="#6B4A1F">$135,000</text>
          <text x="333" y="235" text-anchor="middle" font-size="11" font-weight="600" fill="#47433E">Dec 2024</text>
          <text x="333" y="250" text-anchor="middle" font-size="9.5" fill="#7D756D">${en ? "SID 482 Launch" : "SID 482 출범"}</text>

          <!-- Group 4: FY25-26 -->
          <rect x="420" y="110" width="36" height="105" rx="5" fill="#7A1F2B"/>
          <rect x="460" y="30" width="36" height="185" rx="5" fill="#B67A1E"/>
          <text x="438" y="103" text-anchor="middle" font-size="10.5" font-weight="700" fill="#7A1F2B">$76,515</text>
          <text x="478" y="23" text-anchor="middle" font-size="10.5" font-weight="700" fill="#6B4A1F">$141,210</text>
          <text x="458" y="235" text-anchor="middle" font-size="11" font-weight="600" fill="#47433E">FY25–26</text>
          <text x="458" y="250" text-anchor="middle" font-size="9.5" fill="#7D756D">DAMA 90%: $68,864</text>

          <!-- Group 5: FY26-27 Current -->
          <rect x="545" y="104" width="38" height="111" rx="5" fill="#530009"/>
          <rect x="587" y="22" width="38" height="193" rx="5" fill="#6B4A1F"/>
          <text x="564" y="96" text-anchor="middle" font-size="11" font-weight="800" fill="#530009">$79,423</text>
          <text x="606" y="15" text-anchor="middle" font-size="11" font-weight="800" fill="#6B4A1F">$146,576</text>
          <text x="585" y="235" text-anchor="middle" font-size="11" font-weight="800" fill="#1A1211">${en ? "FY26–27 (Current)" : "FY26–27 (현행)"}</text>
          <text x="585" y="250" text-anchor="middle" font-size="9.5" font-weight="700" fill="#2E6B4F">DAMA 90%: $71,481</text>

          <!-- Legend -->
          <rect x="70" y="14" width="12" height="12" rx="2" fill="#7A1F2B"/>
          <text x="87" y="24" font-size="10.5" font-weight="700" fill="#2E2E2E">CSIT (Core Skills · 186)</text>
          <rect x="235" y="14" width="12" height="12" rx="2" fill="#B67A1E"/>
          <text x="252" y="24" font-size="10.5" font-weight="700" fill="#6B4A1F">SSIT (Specialist Skills)</text>
        </svg>
      `;
    }

    const costEl = document.getElementById("svg-cost-split-chart");
    if (costEl) {
      costEl.innerHTML = `
        <svg viewBox="0 0 680 270" width="100%" style="display:block;height:auto;font-family:'Pretendard Variable','Manrope',sans-serif;">
          <rect x="0" y="0" width="680" height="270" rx="10" fill="#FCFAF6"/>
          <!-- Employer Box (Left) -->
          <rect x="24" y="22" width="305" height="226" rx="10" fill="#F2E4E5" stroke="#D9A7AD" stroke-width="1.5"/>
          <text x="40" y="48" font-size="12.5" font-weight="800" fill="#7A1F2B">${en ? "🏢 Mandatory Employer Costs (s 245AR Ban)" : "🏢 고용주 의무 부담 (전가 절대 금지 · s 245AR)"}</text>
          <text x="40" y="72" font-size="11" fill="#2E2E2E">1. Standard Business Sponsorship: <tspan font-weight="700">$420</tspan></text>
          <text x="40" y="95" font-size="11" fill="#2E2E2E">2. Nomination Fee: <tspan font-weight="700">482 $330</tspan> / <tspan font-weight="700">186 $540</tspan></text>
          <text x="40" y="118" font-size="11" fill="#2E2E2E">${en ? "3. SAF Levy (Turnover < $10M Small Business):" : "3. SAF Levy (매출 $10M 미만 중소기업):"}</text>
          <text x="52" y="138" font-size="10.5" font-weight="700" fill="#530009">${en ? "• 482: $1,200/yr (4yr $4,800) | 186/494: $3,000" : "• 482: 연 $1,200 (4년 $4,800) | 186/494: $3,000"}</text>
          <text x="40" y="160" font-size="11" fill="#2E2E2E">${en ? "4. SAF Levy (Turnover ≥ $10M Large Business):" : "4. SAF Levy (매출 $10M 이상 대기업):"}</text>
          <text x="52" y="180" font-size="10.5" font-weight="700" fill="#530009">${en ? "• 482: $1,800/yr (4yr $7,200) | 186/494: $5,000" : "• 482: 연 $1,800 (4년 $7,200) | 186/494: $5,000"}</text>
          <rect x="40" y="196" width="273" height="36" rx="6" fill="#FFFFFF" stroke="#D9A7AD"/>
          <text x="176" y="218" text-anchor="middle" font-size="10.5" font-weight="800" fill="#7A1F2B">${en ? "⚠️ Illegal to recover/deduct from worker (s 245AR)" : "⚠️ 급여 공제·근로자 대납 적발 시 스폰서 취소·벌금"}</text>

          <!-- Applicant Box (Right) -->
          <rect x="351" y="22" width="305" height="226" rx="10" fill="#F1EDE6" stroke="#DED6C8" stroke-width="1.5"/>
          <text x="367" y="48" font-size="12.5" font-weight="800" fill="#6B4A1F">${en ? "👤 Applicant Visa Stage Charges (FY26–27)" : "👤 비자 신청자(근로자) 부담 가능 항목 (FY26–27)"}</text>
          <text x="367" y="74" font-size="11" fill="#2E2E2E">${en ? "1. SID 482 Visa Application Charge (VAC):" : "1. SID 482 비자 신청비 (VAC):"}</text>
          <text x="379" y="94" font-size="10.5" font-weight="700" fill="#6B4A1F">${en ? "• Primary $4,015 | Adult $4,015 | Child $1,005" : "• 주신청자 $4,015 | 성인 동반 $4,015 | 미성년 $1,005"}</text>
          <text x="367" y="118" font-size="11" fill="#2E2E2E">${en ? "2. ENS 186 / SESR 494 Visa Charge (VAC):" : "2. ENS 186 / SESR 494 비자 신청비 (VAC):"}</text>
          <text x="379" y="138" font-size="10.5" font-weight="700" fill="#6B4A1F">${en ? "• Primary $6,140 | Adult $3,070 | Child $1,535" : "• 주신청자 $6,140 | 성인 동반 $3,070 | 미성년 $1,535"}</text>
          <text x="367" y="162" font-size="11" fill="#2E2E2E">${en ? "3. Ancillary Visa Costs (Lawful for Worker):" : "3. 부대 비용 (근로자 본인 부담 합법):"}</text>
          <text x="379" y="182" font-size="10.5" fill="#47433E">${en ? "• English, Skills Assessment, Health, Police, Visa Legal Fee" : "• 영어시험, 기술심사, 신체검사, 신원조회, 비자단계 수임료"}</text>
          <rect x="367" y="196" width="273" height="36" rx="6" fill="#E7F3EC"/>
          <text x="503" y="218" text-anchor="middle" font-size="10.5" font-weight="800" fill="#2E6B4F">${en ? "✅ Visa Stage fees may be paid by worker or employer" : "✅ 비자 신청(Visa Stage) 비용은 고용주·근로자 자율 합의"}</text>
        </svg>
      `;
    }

    const flowEl = document.getElementById("svg-pathway-flow-chart");
    if (flowEl) {
      flowEl.innerHTML = `
        <svg viewBox="0 0 920 165" width="100%" style="display:block;height:auto;font-family:'Pretendard Variable','Manrope',sans-serif;">
          <rect x="0" y="0" width="920" height="165" rx="10" fill="#1A1211"/>
          <!-- Step 1 -->
          <rect x="20" y="25" width="200" height="115" rx="8" fill="#271B1A" stroke="#D9A7AD" stroke-width="1.5"/>
          <text x="120" y="50" text-anchor="middle" font-size="11" font-weight="800" fill="#D9A7AD">${en ? "STEP 1 · SID 482 Entry" : "STEP 1 · SID 482 진입요건"}</text>
          <text x="120" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="#FFFFFF">${en ? "1 Yr FTE in Last 5 Yrs" : "최근 5년 내 1년 FTE 경력"}</text>
          <text x="120" y="96" text-anchor="middle" font-size="10.5" fill="#F1EDE6">CSIT $79,423 / SSIT $146,576</text>
          <text x="120" y="116" text-anchor="middle" font-size="10" fill="#CFC9BF">${en ? "IELTS 5.0 (each 5.0) · Up to 4 Yrs" : "IELTS 5.0 (각 5.0) · 최대 4년"}</text>

          <text x="233" y="88" text-anchor="middle" font-size="18" font-weight="800" fill="#D9A7AD">→</text>

          <!-- Step 2 -->
          <rect x="246" y="25" width="215" height="115" rx="8" fill="#271B1A" stroke="#B67A1E" stroke-width="1.5"/>
          <text x="353" y="50" text-anchor="middle" font-size="11" font-weight="800" fill="#EED2A4">${en ? "STEP 2 · Mobility Clock" : "STEP 2 · 스폰서 근무 & 이직 시계"}</text>
          <text x="353" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="#FFFFFF">Condition 8607 (180d/365d)</text>
          <text x="353" y="96" text-anchor="middle" font-size="10.5" fill="#F1EDE6">${en ? "180d consecutive · 365d total gap" : "퇴사 후 연속 180일 · 누적 365일 유예"}</text>
          <text x="353" y="116" text-anchor="middle" font-size="10" fill="#EED2A4">${en ? "Lawful work during transition gap" : "공백기 동안 타 고용주 근무 합법"}</text>

          <text x="474" y="88" text-anchor="middle" font-size="18" font-weight="800" fill="#D9A7AD">→</text>

          <!-- Step 3 -->
          <rect x="488" y="25" width="205" height="115" rx="8" fill="#271B1A" stroke="#1F5A5E" stroke-width="1.5"/>
          <text x="590" y="50" text-anchor="middle" font-size="11" font-weight="800" fill="#9ED3D6">${en ? "STEP 3 · Multi-Sponsor Sum" : "STEP 3 · 다중 스폰서 경력 합산"}</text>
          <text x="590" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="#FFFFFF">${en ? "Reach 2 Yrs (730 Days)" : "총 2년 (730일) 달성"}</text>
          <text x="590" y="96" text-anchor="middle" font-size="10.5" fill="#F1EDE6">${en ? "Sponsor A 14m + Sponsor B 10m OK" : "A스폰서 14개월 + B스폰서 10개월 OK"}</text>
          <text x="590" y="116" text-anchor="middle" font-size="10" fill="#CFC9BF">${en ? "Same 4-digit ANZSCO Unit Group" : "동일 ANZSCO 4자리 직군 유지"}</text>

          <text x="706" y="88" text-anchor="middle" font-size="18" font-weight="800" fill="#D9A7AD">→</text>

          <!-- Step 4 -->
          <rect x="720" y="25" width="180" height="115" rx="8" fill="#1A3A2B" stroke="#2E6B4F" stroke-width="2"/>
          <text x="810" y="50" text-anchor="middle" font-size="11" font-weight="800" fill="#A7F3D0">${en ? "STEP 4 · PR Transition" : "STEP 4 · 영주권 전환"}</text>
          <text x="810" y="74" text-anchor="middle" font-size="12.5" font-weight="800" fill="#FFFFFF">${en ? "ENS 186 TRT Lodgement" : "ENS 186 TRT 신청"}</text>
          <text x="810" y="96" text-anchor="middle" font-size="10.5" fill="#E7F3EC">${en ? "CSOL List Not Required!" : "CSOL 리스트 여부 무관!"}</text>
          <text x="810" y="116" text-anchor="middle" font-size="10" fill="#B7DEC8">${en ? "IELTS 6.0 · Under 45 (or Exempt)" : "IELTS 6.0 · 만 45세 미만(특례제외)"}</text>
        </svg>
      `;
    }
  }

  /* 2. Stream & 3-Layer Salary / AMSR 2x2 Matrix Checker (F06) */
  const PERIOD_THRESHOLDS = {
    "fy26_27": { label: "FY2026–27 (Current)", csit: 79423, ssit: 146576, dama90: 71481, fwhit: 190100 },
    "fy25_26": { label: "FY2025–26", csit: 76515, ssit: 141210, dama90: 68864, fwhit: 183100 },
    "fy24_25_sid": { label: "FY2024–25 (SID Launch)", csit: 73150, ssit: 135000, dama90: 65835, fwhit: 175000 },
    "fy23_24": { label: "FY2023–24", csit: 70000, ssit: 999999, dama90: 63000, fwhit: 167500 },
    "2013_2023": { label: "2013–Jun 2023", csit: 53900, ssit: 999999, dama90: 48510, fwhit: 162000 }
  };

  const AMSR_QUADRANTS = {
    "yes_yes": {
      title_ko: "📋 [AMSR 2×2 매트릭스 · Case A] 동종 호주인 근로자 있음 + Enterprise Agreement / Modern Award 적용 (IMMI 18/033 s 7)",
      title_en: "📋 [AMSR 2×2 Matrix · Case A] Equivalent Australian Worker Present + EA / Modern Award Applies (IMMI 18/033 s 7)",
      items_ko: [
        "적용 Enterprise Agreement 명칭 또는 Modern Award(예: Professional Employees Award [MA000065]) Classification Level 명시",
        "동일 근무지·동일 직급 호주 시민권/영주권 근로자의 고용계약서 및 최근 급여명세서(Payslips, 개인정보 마스킹)",
        "제안 기본급(GAE)이 호주인 근로자 연봉(AMSR) 및 노미네이션 시점 CSIT 이상임을 입증하는 비교표"
      ],
      items_en: [
        "Specify the Enterprise Agreement clause or Modern Award classification level (e.g., Professional Employees Award [MA000065])",
        "Redacted employment contract and recent payslips of the equivalent Australian worker at the same workplace",
        "Comparison schedule proving offered GAE >= both AMSR and the applicable CSIT threshold"
      ]
    },
    "yes_no": {
      title_ko: "📋 [AMSR 2×2 매트릭스 · Case B] 동종 호주인 근로자 있음 + 일반 개별 근로계약 (Common Law Contract · IMMI 18/033 s 7(b))",
      title_en: "📋 [AMSR 2×2 Matrix · Case B] Equivalent Australian Worker Present + Common Law Contract (IMMI 18/033 s 7(b))",
      items_ko: [
        "동일 사업장 내 동종 호주인 근로자의 서명된 고용계약서 사본",
        "해당 호주인 근로자의 최근 2~3회분 급여명세서(Payslips) 또는 STP Payroll Summary",
        "경력·책임 차이에 따른 연봉 차등이 있는 경우 객관적 산정 근거 설명서"
      ],
      items_en: [
        "Signed employment contract of the equivalent Australian worker (redacted for privacy)",
        "Recent 2–3 payslips or Single Touch Payroll (STP) summary of that Australian worker",
        "Written justification if seniority or duties create any variance"
      ]
    },
    "no_yes": {
      title_ko: "📋 [AMSR 2×2 매트릭스 · Case C] 동종 호주인 근로자 없음 + 직무에 Modern Award / EA 적용 (IMMI 18/033 s 8)",
      title_en: "📋 [AMSR 2×2 Matrix · Case C] No Equivalent Australian Worker + Modern Award / EA Covers Role (IMMI 18/033 s 8)",
      items_ko: [
        "적용 Modern Award 명칭(예: <a href='https://www.fwc.gov.au/document-search/view/2/aHR0cHM6Ly9zYXNyY2RhdGFwcmRhdWVhYS5ibG9iLmNvcmUud2luZG93cy5uZXQvYXdhcmRzL01vZGVybl9Bd2FyZHMvTUEwMDAwNjUucGRm' target='_blank' rel='noopener'><strong>Professional Employees Award [MA000065] 원문 보기 ↗</strong></a>) 및 Classification Pay Guide",
        "외부 시장 연봉 증빙 최소 2종: ① Jobs and Skills Australia / Hays / Robert Half 연봉 가이드, ② 동일 지역 최근 구인광고(Seek/Indeed) 2~3건",
        "Award 최저급이 CSIT보다 낮더라도 보장 연봉(GAE)은 반드시 CSIT($79,423 또는 DAMA $71,481) 이상으로 계약"
      ],
      items_en: [
        "Applicable Modern Award classification & Pay Guide (e.g., <a href='https://www.fwc.gov.au/document-search/view/2/aHR0cHM6Ly9zYXNyY2RhdGFwcmRhdWVhYS5ibG9iLmNvcmUud2luZG93cy5uZXQvYXdhcmRzL01vZGVybl9Bd2FyZHMvTUEwMDAwNjUucGRm' target='_blank' rel='noopener'><strong>Professional Employees Award [MA000065] Official PDF ↗</strong></a>)",
        "At least 2 external market sources: (1) JSA/ABS or Hays/Robert Half Salary Guide + (2) 2–3 recent local job advertisements",
        "Offered GAE must still meet or exceed CSIT ($79,423 or DAMA $71,481) even where the Award minimum is lower"
      ]
    },
    "no_no": {
      title_ko: "📋 [AMSR 2×2 매트릭스 · Case D] 동종 호주인 근로자 없음 + Award 미적용 전문·관리직 (IMMI 18/033 s 8(b) 최고심사 구간)",
      title_en: "📋 [AMSR 2×2 Matrix · Case D] No Equivalent Australian Worker + Award-Free Role (IMMI 18/033 s 8(b) Strict Scrutiny)",
      items_ko: [
        "AMSR 산정 방법론 진술서(Methodology Statement — 직무 범위·근무 도시·요구 경력에 따른 연봉 도출 논리)",
        "공인 보수 조사 보고서(Hays, Robert Half, Mercer 또는 Jobs and Skills Australia 통계) 1~2종",
        "동일 지역(Metro/Regional)·동일 직무의 최근 6개월 내 실제 구인광고(연봉 범위가 명시된 광고) 최소 2~3건"
      ],
      items_en: [
        "Written AMSR Methodology Statement detailing how the remuneration was benchmarked for location and skill level",
        "1–2 reputable industry remuneration surveys (Hays, Robert Half, Mercer, or JSA statistics)",
        "2–3 contemporaneous job advertisements in the same location explicitly stating salary bands"
      ]
    }
  };

  function updateStreamChecker() {
    const en = STATE.lang === "en";
    const mg = document.getElementById("sm-major-group")?.value || "mgr_prof";
    const periodKey = document.getElementById("sm-lodgement-period")?.value || "fy26_27";
    const pThresh = PERIOD_THRESHOLDS[periodKey] || PERIOD_THRESHOLDS.fy26_27;
    const salary = parseFloat(document.getElementById("sm-offered-salary")?.value || "82000");
    const amsr = parseFloat(document.getElementById("sm-amsr")?.value || "80000");
    const auWorker = document.getElementById("sm-au-worker")?.value || "no";
    const awardApplies = document.getElementById("sm-award-applies")?.value || "yes";
    const isDama = document.getElementById("sm-dama-region")?.checked || false;
    const out = document.getElementById("stream-checker-result");
    if (!out) return;

    const activeCsit = pThresh.csit;
    const activeSsit = pThresh.ssit;
    const activeDama90 = pThresh.dama90;

    const amsrOk = salary >= amsr;
    const csitOk = salary >= activeCsit;
    const ssitOk = salary >= activeSsit && mg !== "trades_3" && mg !== "machinery_lab_78";
    const damaOk = (isDama || (salary >= activeDama90 && salary < activeCsit)) && salary >= activeDama90 && amsrOk;

    let badges = [];
    if (!amsrOk) {
      badges.push(en
        ? `<div class="alert-box alert-box--danger"><strong>❌ Below Market Salary Rate (AMSR) (${fmtAUD(salary)} &lt; AMSR ${fmtAUD(amsr)})</strong>: Nomination will be refused under reg 2.72(15) if offered earnings are below AMSR (and breaches reg 2.79 sponsor obligations). Must be at least <strong>${fmtAUD(Math.max(amsr, isDama ? activeDama90 : activeCsit))}</strong>.</div>`
        : `<div class="alert-box alert-box--danger"><strong>❌ 시장 연봉(AMSR) 미달 (${fmtAUD(salary)} &lt; AMSR ${fmtAUD(amsr)})</strong>: 제안 연봉이 호주 현지 시장 연봉(AMSR)보다 낮으면 CSIT 충족 여부와 무관하게 노미네이션이 거절됩니다(reg 2.72(15) 및 reg 2.79 위반). 최소 <strong>${fmtAUD(Math.max(amsr, isDama ? activeDama90 : activeCsit))}</strong> 이상이어야 합니다.</div>`);
    } else {
      if (ssitOk) {
        badges.push(en
          ? `<div class="alert-box alert-box--success"><strong>✅ SID 482 Specialist Skills Stream Eligible (${fmtAUD(salary)} ≥ SSIT ${fmtAUD(activeSsit)})</strong>: Bypass the CSOL occupation list with 7-day priority processing and transition to ENS 186 TRT PR after 2 years.</div>`
          : `<div class="alert-box alert-box--success"><strong>✅ SID 482 Specialist Skills 스트림 적격 (${fmtAUD(salary)} ≥ SSIT ${fmtAUD(activeSsit)})</strong>: 직군 리스트(CSOL) 포함 여부와 무관하게 7일 우선심사 트랙으로 진행 가능하며, 2년 후 ENS 186 TRT 영주권 전환이 가능합니다.</div>`);
      }
      if (csitOk && (mg === "mgr_prof" || mg === "trades_3")) {
        badges.push(en
          ? `<div class="alert-box alert-box--success"><strong>✅ SID 482 Core Skills &amp; ENS 186 Salary Met (${fmtAUD(salary)} ≥ ${pThresh.label} Threshold ${fmtAUD(activeCsit)})</strong>: Eligible for 482 Core Skills (1 yr FTE) and 186 Direct Entry (3 yrs FTE + skills assessment) if on CSOL (456 occupations).</div>`
          : `<div class="alert-box alert-box--success"><strong>✅ SID 482 Core Skills &amp; ENS 186 연봉 요건 충족 (${fmtAUD(salary)} ≥ ${pThresh.label} 기준 ${fmtAUD(activeCsit)})</strong>: CSOL(456개 직군)에 해당하면 1년 경력으로 482 Core Skills, 3년 경력+기술심사로 186 Direct Entry 신청이 가능합니다.</div>`);
      } else if (csitOk && (mg === "non_csol_high" || mg === "machinery_lab_78") && !ssitOk) {
        badges.push(en
          ? `<div class="alert-box alert-box--warn"><strong>⚠️ Non-CSOL / Skill Level 4–5 Occupation Bridge</strong>: Salary meets CSIT (${fmtAUD(activeCsit)}), but if the occupation is outside CSOL, use our <a href="https://changa9090.github.io/parkco-dama-navigator/"><strong>DAMA 13-Region Navigator (2,474 Occupations) →</strong></a> or raise salary to SSIT (${fmtAUD(activeSsit)}).</div>`
          : `<div class="alert-box alert-box--warn"><strong>⚠️ CSOL 미포함 / Skill Level 4–5 직군 우회 전략</strong>: 연봉은 CSIT(${fmtAUD(activeCsit)}) 이상이나 직군이 CSOL에 없는 경우, <a href="https://changa9090.github.io/parkco-dama-navigator/"><strong>박앤코 DAMA 13개 지역 협정 네비게이터(2,474개 직군 검색) →</strong></a>를 활용하거나 SSIT(${fmtAUD(activeSsit)}) 스트림을 검토하세요.</div>`);
      }
      if (damaOk) {
        badges.push(en
          ? `<div class="alert-box alert-box--success"><strong>✅ DAMA 90% CSIT Concession (${fmtAUD(activeDama90)}) Eligible</strong>: Offered salary qualifies under regional DAMA concessions. <a href="https://changa9090.github.io/parkco-dama-navigator/"><strong>Check your occupation across 13 DAMAs (2,474 rows) →</strong></a></div>`
          : `<div class="alert-box alert-box--success"><strong>✅ DAMA CSIT 90% 감면 특례 (${fmtAUD(activeDama90)}) 구간 적격</strong>: 일반 CSIT(${fmtAUD(activeCsit)}) 미달 구간이라도 지정지역 DAMA 협정을 통해 합법적 스폰서십 및 186 영주권 전환이 가능합니다. <a href="https://changa9090.github.io/parkco-dama-navigator/"><strong>13개 DAMA 협정 직군 즉시 검색하기 →</strong></a></div>`);
      }
      if (!csitOk && !damaOk) {
        badges.push(en
          ? `<div class="alert-box alert-box--danger"><strong>❌ Below Minimum CSIT (${fmtAUD(activeCsit)})</strong>: Offered salary (${fmtAUD(salary)}) is <strong>${fmtAUD(activeCsit - salary)}</strong> short of standard CSIT (or requires ≥${fmtAUD(activeDama90)} under a regional DAMA 90% concession).</div>`
          : `<div class="alert-box alert-box--danger"><strong>❌ 최소 연봉 기준(${fmtAUD(activeCsit)}) 미달</strong>: 현재 제안 연봉(${fmtAUD(salary)})이 법정 하한선보다 <strong>${fmtAUD(activeCsit - salary)}</strong> 부족합니다. (지방 DAMA 90% 특례 적용 시에도 최소 ${fmtAUD(activeDama90)} 이상 필요)</div>`);
      }
    }

    const qKey = `${auWorker}_${awardApplies}`;
    const qInfo = AMSR_QUADRANTS[qKey] || AMSR_QUADRANTS.no_yes;
    const qList = (en ? qInfo.items_en : qInfo.items_ko).map((item) => `<li>${item}</li>`).join("");

    out.innerHTML = `
      <div class="result-summary-grid">
        <div class="mini-kpi"><span>${en ? "Offered Base Salary (GAE)" : "제안 기본급 (GAE)"}</span><strong>${fmtAUD(salary)}</strong></div>
        <div class="mini-kpi"><span>${en ? `Required Floor (${pThresh.label})` : `필수 하한선 (${pThresh.label})`}</span><strong>${fmtAUD(Math.max(amsr, isDama ? activeDama90 : activeCsit))}</strong></div>
        <div class="mini-kpi"><span>${en ? "DAMA 90% / FWHIT" : "DAMA 90% / 고소득면제"}</span><strong>${fmtAUD(activeDama90)} / ${fmtAUD(pThresh.fwhit)}</strong></div>
      </div>
      <div style="margin-top:0.85rem;display:flex;flex-direction:column;gap:0.65rem;">
        ${badges.join("")}
        <div class="alert-box" style="background:#FCFAF6;border:1px solid #DED6C8;color:#1A1211;">
          <div style="font-weight:800;color:#7A1F2B;margin-bottom:6px;">${en ? qInfo.title_en : qInfo.title_ko}</div>
          <ul style="margin:0;padding-left:18px;font-size:13px;line-height:1.55;">${qList}</ul>
        </div>
      </div>
    `;
    updateDiagnosticPreview();
  }

  /* 3. ENS 186 TRT 2-Year (730-Day) & SID 482 1-Year FTE Calculator */
  function updateTrtCalculator() {
    const en = STATE.lang === "en";
    const mode = document.getElementById("trt-target-mode")?.value || "186_trt";
    const age = parseInt(document.getElementById("trt-applicant-age")?.value || "38", 10);
    const m1 = parseFloat(document.getElementById("trt-emp1-months")?.value || "15");
    const h1 = parseFloat(document.getElementById("trt-emp1-hours")?.value || "38");
    const m2 = parseFloat(document.getElementById("trt-emp2-months")?.value || "9");
    const h2 = parseFloat(document.getElementById("trt-emp2-hours")?.value || "38");
    const unpaid = parseInt(document.getElementById("trt-unpaid-days")?.value || "10", 10);
    const ageEx = document.getElementById("trt-age-exemption")?.value || "none";
    const out = document.getElementById("trt-calc-result");
    if (!out) return;

    const targetDays = mode === "482_sid" ? 365 : (mode === "186_trt" ? 730 : 1095);
    const targetLabel = mode === "482_sid"
      ? (en ? "SID 482 (1 Yr / 365 FTE Days)" : "SID 482 (1년 / 365일 FTE)")
      : (mode === "186_trt" ? (en ? "ENS 186 TRT (2 Yrs / 730 Days)" : "ENS 186 TRT (2년 / 730일)") : (en ? "ENS 186 DE / 494 (3 Yrs / 1,095 Days)" : "ENS 186 DE / 494 (3년 / 1,095일)"));

    const ratio1 = Math.min(1, h1 / 38);
    const ratio2 = Math.min(1, h2 / 38);
    const days1 = Math.round(m1 * 30.4375 * ratio1);
    const days2 = Math.round(m2 * 30.4375 * ratio2);
    const netDays = Math.max(0, days1 + days2 - unpaid);
    const remainingDays = Math.max(0, targetDays - netDays);
    const pct = Math.min(100, Math.round((netDays / targetDays) * 100));

    let ageOk = true;
    let ageLimitText = en ? "Under 45 requirement met" : "만 45세 미만 충족";
    if (mode !== "482_sid") {
      if (age >= 45 && ageEx === "none") {
        ageOk = false;
        ageLimitText = en
          ? `❌ Age ${age} — Exceeds standard under-45 limit for 186/494 (Requires DAMA Age 50/55 concession or High-Income/Academic/Doctor exemption)`
          : `❌ 만 ${age}세 — 일반 186/494 연령 상한(만 45세 미만) 초과 (DAMA 50/55세 특례 또는 고소득 면제 검토 필수)`;
      } else if (age >= 45) {
        ageLimitText = en
          ? `✅ Age ${age} — Eligible under selected age exemption (${ageEx})`
          : `✅ 만 ${age}세 — 선택하신 연령 면제 특례(${ageEx})로 신청 가능`;
      }
    } else {
      ageLimitText = en ? "✅ No upper age limit for SID 482" : "✅ SID 482는 연령 상한 없음";
    }

    out.innerHTML = `
      <div class="result-summary-grid">
        <div class="mini-kpi"><span>${en ? "Countable FTE Days (Net of Unpaid)" : "인정 경력 일수 (무급휴직 차감 후)"}</span><strong>${netDays.toLocaleString()}${en ? "d" : "일"} / ${targetDays.toLocaleString()}${en ? "d" : "일"} (${pct}%)</strong></div>
        <div class="mini-kpi"><span>${en ? "Employer 1 + Employer 2 FTE" : "제1 직장 + 제2 직장 FTE 환산"}</span><strong>${days1}${en ? "d" : "일"} + ${days2}${en ? "d" : "일"} (−${unpaid}${en ? "d" : "일"})</strong></div>
        <div class="mini-kpi"><span>${en ? "Remaining Time to Target" : "목표 달성까지 남은 기간"}</span><strong>${remainingDays === 0 ? (en ? "Ready to Lodge ✅" : "즉시 신청 가능 ✅") : (en ? `~${remainingDays} days (${(remainingDays / 30.4).toFixed(1)}m)` : `약 ${remainingDays}일 (${(remainingDays / 30.4).toFixed(1)}개월)`)}</strong></div>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="width:${pct}%;"></div>
      </div>
      <div class="alert-box ${remainingDays === 0 && ageOk ? "alert-box--success" : "alert-box--warn"}">
        <p style="margin:0 0 0.35rem;"><strong>[${targetLabel}]</strong>: ${remainingDays === 0 ? (en ? "Full-time paid experience requirement satisfied." : "필수 유급 경력 일수를 모두 충족했습니다.") : (en ? `Requires <strong>${remainingDays} additional days</strong> of paid sponsored work.` : `추가로 <strong>${remainingDays}일</strong>의 유급 스폰서 근무가 필요합니다.`)}</p>
        <p style="margin:0;"><strong>[${en ? "Age Requirement" : "연령 요건"}]</strong>: ${ageLimitText}</p>
      </div>
    `;
    updateDiagnosticPreview();
  }

  /* 4. Condition 8607 (180 / 365-Day) Clock */
  function updateCondition8607() {
    const en = STATE.lang === "en";
    const ceaseStr = document.getElementById("c8607-cessation-date")?.value || "2026-08-01";
    const expStr = document.getElementById("c8607-visa-expiry")?.value || "2028-06-30";
    const priorGap = parseInt(document.getElementById("c8607-prior-gap-days")?.value || "0", 10);
    const licensed = document.getElementById("c8607-licensed-occ")?.value || "no";
    const out = document.getElementById("c8607-calc-result");
    if (!out) return;

    const ceaseDate = new Date(ceaseStr + "T00:00:00");
    const expDate = new Date(expStr + "T00:00:00");
    const remainingCumulative = Math.max(0, 365 - priorGap);
    const allowedWindowDays = Math.min(180, remainingCumulative);

    const deadlineDate = new Date(ceaseDate.getTime() + allowedWindowDays * 86400000);
    const effectiveDeadline = deadlineDate < expDate ? deadlineDate : expDate;
    const fmtDate = (d) => isNaN(d.getTime()) ? "—" : d.toISOString().slice(0, 10);

    out.innerHTML = `
      <div class="result-summary-grid">
        <div class="mini-kpi"><span>${en ? "Allowed Gap Window This Cessation" : "이번 퇴사 후 허용 유예 일수"}</span><strong>${en ? `Max ${allowedWindowDays} days` : `최대 ${allowedWindowDays}일`}</strong></div>
        <div class="mini-kpi"><span>${en ? "New Nomination / Visa Deadline" : "새 스폰서 노미네이션/비자 데드라인"}</span><strong>${fmtDate(effectiveDeadline)}</strong></div>
        <div class="mini-kpi"><span>${en ? "Remaining Cumulative Cap (of 365d)" : "비자 기간 잔여 누적 한도 (365일 중)"}</span><strong>${en ? `${remainingCumulative} days left` : `${remainingCumulative}일 남음`}</strong></div>
      </div>
      <div class="alert-box alert-box--success" style="margin-top:0.85rem;">
        <p style="margin:0 0 0.4rem;"><strong>✅ ${en ? "Lawful Interim Work Rights (Post-1 July 2024 Condition 8607)" : "퇴사 공백기 합법 근무 안내 (2024년 7월 1일 개정 Condition 8607)"}</strong></p>
        <p style="margin:0;font-size:0.88rem;">
          ${en
            ? `From your sponsor cessation date (<strong>${ceaseStr}</strong>), you have until <strong>${fmtDate(effectiveDeadline)}</strong> for a new employer Nomination or visa application to be lodged without breaching Condition 8607. ${licensed === "yes" ? "Because your occupation requires mandatory licensing/registration, you must maintain valid registration during any interim work." : "During this transition window, you may lawfully work for alternative employers in any occupation (note: non-sponsored gap work does not count toward the 2-year 186 TRT clock)."}`
            : `기존 스폰서 퇴사일(<strong>${ceaseStr}</strong>)로부터 <strong>${fmtDate(effectiveDeadline)}</strong>까지 새로운 고용주의 Nomination이 접수되거나 타 비자를 신청하면 비자 조건 위반이 발생하지 않습니다. ${licensed === "yes" ? "단, 귀하는 <strong>필수 면허/등록 직군</strong>이므로 공백기 근무 시에도 해당 직무 면허를 반드시 유효하게 유지해야 합니다." : "특히 이 유예 기간 동안 생계 유지를 위해 <strong>직종 제한 없이 다른 고용주 아래에서 합법적으로 근무</strong>할 수 있습니다 (단, 스폰서 아닌 곳에서 일한 기간은 186 TRT 2년 시계에는 합산되지 않습니다)."}`}
        </p>
      </div>
    `;
    updateDiagnosticPreview();
  }

  /* 5. SAF Levy & VAC Cost Calculator */
  function updateSafCalculator() {
    const en = STATE.lang === "en";
    const visa = document.getElementById("saf-visa-type")?.value || "482";
    const turnover = document.getElementById("saf-turnover")?.value || "small";
    const years = parseInt(document.getElementById("saf-years")?.value || "4", 10);
    const needSbs = document.getElementById("saf-need-sbs")?.value || "yes";
    const adults = parseInt(document.getElementById("saf-adults")?.value || "1", 10);
    const children = parseInt(document.getElementById("saf-children")?.value || "1", 10);
    const out = document.getElementById("saf-cost-result");
    if (!out) return;

    const sbsFee = (visa === "482" || visa === "494") && needSbs === "yes" ? 420 : 0;
    const nomFee = visa === "482" ? 330 : (visa === "494" ? 0 : 540);
    let safLevy = 0;
    if (visa === "482") {
      safLevy = (turnover === "small" ? 1200 : 1800) * years;
    } else {
      safLevy = turnover === "small" ? 3000 : 5000;
    }
    const employerTotal = sbsFee + nomFee + safLevy;

    const baseVac = visa === "482" ? 4015 : 6140;
    const addAdultVac = (visa === "482" ? 4015 : 3070) * adults;
    const addChildVac = (visa === "482" ? 1005 : 1535) * children;
    const applicantTotal = baseVac + addAdultVac + addChildVac;

    out.innerHTML = `
      <div class="result-summary-grid">
        <div class="mini-kpi" style="border-top:3px solid #7A1F2B;">
          <span>🏢 ${en ? "Employer Mandatory Total (s 245AR)" : "고용주 의무 부담 합계 (s 245AR)"}</span>
          <strong>${fmtAUD(employerTotal)}</strong>
          <small>SBS ${fmtAUD(sbsFee)} + Nom ${fmtAUD(nomFee)} + SAF ${fmtAUD(safLevy)}</small>
        </div>
        <div class="mini-kpi" style="border-top:3px solid #6B4A1F;">
          <span>👤 ${en ? "Applicant Family VAC (FY26–27)" : "신청자 가족 비자비 (FY26–27 VAC)"}</span>
          <strong style="color:#6B4A1F;">${fmtAUD(applicantTotal)}</strong>
          <small>${en ? `Base ${fmtAUD(baseVac)} + Adults ${fmtAUD(addAdultVac)} + Children ${fmtAUD(addChildVac)}` : `주신청 ${fmtAUD(baseVac)} + 성인 ${fmtAUD(addAdultVac)} + 자녀 ${fmtAUD(addChildVac)}`}</small>
        </div>
        <div class="mini-kpi" style="border-top:3px solid #2E6B4F;">
          <span>${en ? "Combined Government Charges" : "정부 납부 총합계 (고용주+신청자)"}</span>
          <strong style="color:#2E6B4F;">${fmtAUD(employerTotal + applicantTotal)}</strong>
          <small>${en ? "100% Primary Statutory Figures" : "100% 1차 법령 수수료 기준"}</small>
        </div>
      </div>
    `;
    updateDiagnosticPreview();
  }

  /* 6. 1-Click Diagnostic Summary & Email Pre-fill */
  function updateDiagnosticPreview() {
    const en = STATE.lang === "en";
    const previewEl = document.getElementById("sid-diagnostic-preview");
    const emailBtn = document.getElementById("btn-sid-email");
    if (!previewEl) return;

    const salary = document.getElementById("sm-offered-salary")?.value || "82000";
    const amsr = document.getElementById("sm-amsr")?.value || "80000";
    const trtMode = document.getElementById("trt-target-mode")?.selectedOptions?.[0]?.text || "ENS 186 TRT";
    const age = document.getElementById("trt-applicant-age")?.value || "38";
    const m1 = document.getElementById("trt-emp1-months")?.value || "15";
    const m2 = document.getElementById("trt-emp2-months")?.value || "9";
    const cease = document.getElementById("c8607-cessation-date")?.value || "2026-08-01";
    const visa = document.getElementById("saf-visa-type")?.selectedOptions?.[0]?.text || "SID 482";
    const turnover = document.getElementById("saf-turnover")?.value === "small" ? (en ? "<$10M Small Business" : "$10M 미만 중소기업") : (en ? "≥$10M Large Business" : "$10M 이상 대기업");

    const text = en ? [
      "=== [PNC Legal Pty Ltd t/a Park & Co Lawyers | Employer Sponsored (482·186·494) Diagnostic Brief] ===",
      `• Date: ${new Date().toISOString().slice(0, 10)} (FY2026–27 CSIT $79,423 / SSIT $146,576)`,
      `• Target Visa & Sponsor Size: ${visa} | Turnover: ${turnover}`,
      `• Offered Base Salary / AMSR: AUD $${Number(salary).toLocaleString()} / AMSR AUD $${Number(amsr).toLocaleString()}`,
      `• Experience & Age: ${trtMode} | Age ${age} | Employer 1: ${m1}m + Employer 2: ${m2}m`,
      `• Condition 8607 Reference: Cessation ${cease} (180d consecutive / 365d cumulative window)`,
      `• Official Legal Inquiry: Park & Co Lawyers (enquiry@parkcolawyers.com)`
    ].join("\n") : [
      "=== [PNC Legal Pty Ltd t/a Park & Co Lawyers | 호주 고용주 스폰서 (482·186·494) 진단 요약서] ===",
      `• 진단 일시: ${new Date().toISOString().slice(0, 10)} (FY2026–27 CSIT $79,423 / SSIT $146,576 기준)`,
      `• 희망 비자 및 기업 규모: ${visa} | 스폰서 매출: ${turnover}`,
      `• 제안 기본급 / 시장연봉(AMSR): AUD $${Number(salary).toLocaleString()} / AMSR AUD $${Number(amsr).toLocaleString()}`,
      `• 경력 및 연령 진단: ${trtMode} | 만 ${age}세 | 제1직장 ${m1}개월 + 제2직장 ${m2}개월`,
      `• Condition 8607 기준일: 퇴사일 ${cease} (180일 연속 / 365일 누적 유예 적용)`,
      `• 공식 법률 자문 문의: Park & Co Lawyers (enquiry@parkcolawyers.com)`
    ].join("\n");

    previewEl.textContent = text;
    if (emailBtn) {
      const subject = encodeURIComponent(`[Park & Co Employer Sponsored Inquiry] ${visa} (Salary $${Number(salary).toLocaleString()}, Age ${age})`);
      const body = encodeURIComponent(text + "\n\n[Additional Details]\n- Nominated Occupation (ANZSCO): \n- Current Visa & Expiry Date: \n");
      emailBtn.href = `mailto:enquiry@parkcolawyers.com?subject=${subject}&body=${body}`;
    }
  }

  /* 6-B. ABF Sponsor Sanctions & Prohibited Employers Explorer (F02) */
  function renderAbfSanctionsExplorer() {
    const en = STATE.lang === "en";
    const abf = STATE.abf || DEFAULT_ABF_DATA;
    const obChart = document.getElementById("svg-abf-obligation-chart");
    const stateBox = document.getElementById("abf-prohibited-And-state-box");
    const tbody = document.getElementById("abf-sanctions-tbody");

    const byOb = abf.by_obligation || { "2.84": 724, "2.86": 498, "2.83": 358, "2.79": 272, "2.82": 192 };
    if (obChart) {
      const bars = [
        { code: "reg 2.84", label: en ? "Fail to provide info" : "감사자료 미제출", count: byOb["2.84"] || 724, color: "#7A1F2B" },
        { code: "reg 2.86", label: en ? "Work outside occupation" : "승인직군 외 근무", count: byOb["2.86"] || 498, color: "#B67A1E" },
        { code: "reg 2.83", label: en ? "Record-keeping breach" : "기록보관 위반(2.83)", count: byOb["2.83"] || 358, color: "#1F5A5E" },
        { code: "reg 2.79", label: en ? "Salary / AMSR breach" : "임금·AMSR 위반", count: byOb["2.79"] || 272, color: "#530009" },
        { code: "reg 2.82", label: en ? "Payroll record breach" : "급여기록 미비(2.82)", count: byOb["2.82"] || 192, color: "#2E6B4F" }
      ];
      const maxVal = Math.max(750, ...bars.map((b) => b.count));
      obChart.innerHTML = `
        <svg viewBox="0 0 620 215" width="100%" style="display:block;height:auto;font-family:'Pretendard Variable','Manrope',sans-serif;">
          <rect x="0" y="0" width="620" height="215" rx="8" fill="#FCFAF6"/>
          ${bars.map((b, i) => {
            const y = 18 + i * 38;
            const w = Math.round((b.count / maxVal) * 340);
            return `
              <text x="14" y="${y + 16}" font-size="11.5" font-weight="800" fill="#1A1211">${b.code}</text>
              <text x="78" y="${y + 16}" font-size="11" fill="#47433E">${b.label}</text>
              <rect x="205" y="${y + 3}" width="${w}" height="18" rx="4" fill="${b.color}"/>
              <text x="${213 + w}" y="${y + 16}" font-size="11.5" font-weight="800" fill="${b.color}">${b.count.toLocaleString()}건</text>
            `;
          }).join("")}
        </svg>
      `;
    }

    if (stateBox) {
      const bySt = abf.by_state || { NSW: 660, VIC: 485, QLD: 280, WA: 215, SA: 98, TAS: 38, NT: 36, ACT: 30 };
      const prohList = Array.isArray(abf.prohibited_employers) && abf.prohibited_employers.length
        ? abf.prohibited_employers
        : [{ legal_name: "Eatalian Deli (WA) Pty Ltd", trading_name: "EATALIAN RISTORANTE", abn: "68660788885", state: "WA", imposed_date: "24-Sep-2025", end_date: "24-Sep-2030", reason: "Subject to a migrant worker sanction (s 245AYM)" }];
      const stPills = Object.entries(bySt).slice(0, 8).map(([k, v]) => `
        <div class="mini-kpi" style="padding:8px 10px;">
          <span>${k}</span>
          <strong style="font-size:15px;">${Number(v).toLocaleString()}</strong>
        </div>
      `).join("");
      stateBox.innerHTML = `
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:10px;">${stPills}</div>
        <div class="alert-box alert-box--danger" style="margin:0;font-size:12.5px;">
          <strong>🚨 s 245AYM Prohibited Employer Register (${prohList.length} Active Declaration)</strong>:<br/>
          ${prohList.map((p) => `• <strong>${p.legal_name}</strong> (t/a ${p.trading_name} · ABN <code>${p.abn}</code> · ${p.state}) — Prohibited <strong>${p.imposed_date} → ${p.end_date}</strong> (${p.reason})`).join("<br/>")}
        </div>
      `;
    }

    if (tbody) {
      const q = (document.getElementById("abf-search-input")?.value || "").trim().toLowerCase();
      const stFilter = document.getElementById("abf-state-filter")?.value || "ALL";
      const obFilter = document.getElementById("abf-ob-filter")?.value || "ALL";
      const statusFilter = document.getElementById("abf-status-filter")?.value || "ALL";

      const rows = Array.isArray(abf.recent_sanctions) ? abf.recent_sanctions : [];
      const filtered = rows.filter((r) => {
        if (stFilter !== "ALL" && r.state !== stFilter) return false;
        if (obFilter !== "ALL" && !(r.obligations_breached || "").includes(obFilter)) return false;
        if (statusFilter === "ACTIVE" && !r.is_active) return false;
        if (q) {
          const hay = `${r.sponsor_name} ${r.trading_name} ${r.abn} ${r.postcode} ${r.sanction_imposed}`.toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      });

      tbody.innerHTML = filtered.slice(0, 80).map((r) => `
        <tr>
          <td>
            <strong>${r.sponsor_name || "—"}</strong>
            ${r.trading_name && r.trading_name !== r.sponsor_name ? `<div style="font-size:11.5px;color:#525866;">t/a ${r.trading_name}</div>` : ""}
          </td>
          <td><code>${r.abn || "—"}</code><div style="font-size:11.5px;color:#525866;">${r.state} ${r.postcode}</div></td>
          <td>
            <strong>${r.sanction_imposed}</strong>
            ${r.infringement_amount ? `<div style="font-size:11.5px;color:#7A1F2B;font-weight:700;">Infringement: ${r.infringement_amount}</div>` : ""}
          </td>
          <td><code>${r.obligations_breached || "—"}</code></td>
          <td style="font-size:12px;">${r.imposed_date} ~ ${r.end_date}</td>
          <td>
            ${r.is_active
              ? `<span class="badge badge-burgundy">● Active Bar</span>`
              : `<span class="badge-ok" style="background:#E5E7EB;color:#374151;">Historical (Expired)</span>`}
          </td>
        </tr>
      `).join("") || `<tr><td colspan="6" style="text-align:center;padding:18px;">조건에 맞는 제재 기록이 없습니다. (No matching records)</td></tr>`;
    }
  }

  /* 7. Render Poller Table & Modal */
  function renderPollerTable(sources) {
    const en = STATE.lang === "en";
    const tbody = document.getElementById("sid-poller-tbody");
    const statusBadge = (s) => {
      if (s.status === "cached_last_good") {
        return `<span class="badge badge-burgundy" title="Preserved last verified snapshot">● Cached Snapshot (Last OK)</span>`;
      }
      return `<span class="badge-ok">● Verified Live (${s.http_status || 200})</span>`;
    };
    const compLine = (s) => s.compilation
      ? `<div style="font-size:11.5px;color:#1F5A5E;font-weight:700;margin-top:2px;">FRL Compilation #${s.compilation} (${s.register_id || ""}) · Effective ${s.effective_start || ""}</div>`
      : "";
    const rowsHtml = sources.map((s, idx) => `
      <tr>
        <td><code>${idx + 1}</code></td>
        <td><span class="badge badge-burgundy">${s.category}</span></td>
        <td>
          <a href="${s.url}" target="_blank" rel="noopener noreferrer"><strong>${en ? s.name_en : s.name_ko}</strong></a>
          ${compLine(s)}
          <div style="font-size:11.5px;color:#525866;margin-top:2px;">SHA-256: <code>${s.sha256_prefix || "—"}</code> (${Math.round((s.content_length || 48200) / 1024)} KB)</div>
        </td>
        <td>${s.authority}</td>
        <td>${s.tracks}</td>
        <td>${s.cadence}</td>
        <td>${statusBadge(s)}</td>
      </tr>
    `).join("");
    if (tbody) tbody.innerHTML = rowsHtml;

    const modalBody = document.getElementById("modal-body-content");
    if (modalBody) {
      modalBody.innerHTML = `
        <p style="font-size:13.5px;color:#47433E;margin-bottom:14px;">
          ${en
            ? "Live status of 13 Department of Home Affairs, ABF Sponsor Sanctions & Federal Register of Legislation primary sources verified by <code>poller/sid_ens_poller.py</code>."
            : "<code>poller/sid_ens_poller.py</code>가 정기 점검하는 13개 호주 연방 이민성, ABF 스폰서 제재 레지스터 및 연방 법령 등록부(FRL) 1차 출처 상태입니다."}
        </p>
        <div class="table-wrap">
          <table class="data-table">
            <thead>
              <tr><th>#</th><th>${en ? "Category" : "구분"}</th><th>${en ? "Source & Content Hash" : "출처명 및 본문 해시"}</th><th>${en ? "Authority" : "관할"}</th><th>${en ? "Status" : "상태"}</th></tr>
            </thead>
            <tbody>
              ${sources.map((s, i) => `
                <tr>
                  <td><code>${i + 1}</code></td>
                  <td><span class="badge badge-burgundy">${s.category}</span></td>
                  <td>
                    <a href="${s.url}" target="_blank" rel="noopener"><strong>${en ? s.name_en : s.name_ko}</strong></a>
                    ${compLine(s)}
                    <div style="font-size:11.5px;color:#525866;">SHA-256: <code>${s.sha256_prefix || "—"}</code> (${Math.round((s.content_length || 48200) / 1024)} KB)</div>
                  </td>
                  <td>${s.authority}</td>
                  <td>${statusBadge(s)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;
    }
  }

  /* 8. Bind Events & Initialize */
  function init() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.getAttribute("data-i18n");
      if (k && !I18N.ko[k]) I18N.ko[k] = el.textContent.trim();
    });

    renderCharts();
    updateStreamChecker();
    updateTrtCalculator();
    updateCondition8607();
    updateSafCalculator();
    renderAbfSanctionsExplorer();
    renderPollerTable(STATE.sources);

    ["sm-major-group", "sm-lodgement-period", "sm-offered-salary", "sm-amsr", "sm-au-worker", "sm-award-applies", "sm-dama-region"].forEach((id) => {
      document.getElementById(id)?.addEventListener("input", updateStreamChecker);
      document.getElementById(id)?.addEventListener("change", updateStreamChecker);
    });
    ["abf-search-input", "abf-state-filter", "abf-ob-filter", "abf-status-filter"].forEach((id) => {
      document.getElementById(id)?.addEventListener("input", renderAbfSanctionsExplorer);
      document.getElementById(id)?.addEventListener("change", renderAbfSanctionsExplorer);
    });
    ["trt-target-mode", "trt-applicant-age", "trt-emp1-months", "trt-emp1-hours", "trt-emp2-months", "trt-emp2-hours", "trt-unpaid-days", "trt-age-exemption"].forEach((id) => {
      document.getElementById(id)?.addEventListener("input", updateTrtCalculator);
      document.getElementById(id)?.addEventListener("change", updateTrtCalculator);
    });
    ["c8607-cessation-date", "c8607-visa-expiry", "c8607-prior-gap-days", "c8607-licensed-occ"].forEach((id) => {
      document.getElementById(id)?.addEventListener("input", updateCondition8607);
      document.getElementById(id)?.addEventListener("change", updateCondition8607);
    });
    ["saf-visa-type", "saf-turnover", "saf-years", "saf-need-sbs", "saf-adults", "saf-children"].forEach((id) => {
      document.getElementById(id)?.addEventListener("input", updateSafCalculator);
      document.getElementById(id)?.addEventListener("change", updateSafCalculator);
    });

    document.getElementById("btn-sid-copy")?.addEventListener("click", function () {
      const txt = document.getElementById("sid-diagnostic-preview")?.textContent || "";
      navigator.clipboard?.writeText(txt);
      this.textContent = "✅ 복사 완료! (Copied)";
      setTimeout(() => { this.textContent = "📋 진단 요약 클립보드 복사"; }, 2200);
    });
    document.getElementById("btn-sid-print")?.addEventListener("click", function () {
      window.print();
    });

    const modal = document.getElementById("detail-modal");
    document.getElementById("btn-polling-status")?.addEventListener("click", function () {
      modal?.classList.add("open");
    });
    document.getElementById("modal-close-btn")?.addEventListener("click", function () {
      modal?.classList.remove("open");
    });
    modal?.addEventListener("click", function (e) {
      if (e.target === modal) modal.classList.remove("open");
    });

    if (window.location.protocol !== "file:") {
      fetch("data/polling_status.json")
        .then((r) => r.json())
        .then((d) => {
          if (d && Array.isArray(d.sources)) {
            STATE.sources = d.sources;
            renderPollerTable(d.sources);
          }
        })
        .catch(() => {});
      fetch("data/sid_ens_data.json")
        .then((r) => r.json())
        .then((sData) => {
          if (sData && sData.income_thresholds) {
            STATE.sidData = sData;
            STATE.csit = sData.income_thresholds.csit || 79423;
            STATE.ssit = sData.income_thresholds.ssit || 146576;
            STATE.dama90 = sData.income_thresholds.dama_90_csit || 71481;
            STATE.fwhit = sData.income_thresholds.fair_work_high_income || 190100;
            updateStreamChecker();
          }
        })
        .catch(() => {});
      fetch("data/abf_sanctions_data.json")
        .then((r) => r.json())
        .then((aData) => {
          if (aData && aData.total_sanctions) {
            STATE.abf = aData;
            renderAbfSanctionsExplorer();
          }
        })
        .catch(() => {});
    }

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        STATE.lang = this.dataset.lang || "ko";
        document.querySelectorAll(".lang-btn").forEach((b) => b.classList.toggle("active", b === this));
        const dict = I18N[STATE.lang] || I18N.ko;
        document.querySelectorAll("[data-i18n]").forEach((el) => {
          const k = el.getAttribute("data-i18n");
          if (dict[k]) el.textContent = dict[k];
        });
        renderCharts();
        updateStreamChecker();
        updateTrtCalculator();
        updateCondition8607();
        updateSafCalculator();
        if (STATE.sources.length) renderPollerTable(STATE.sources);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();


/* === Park & Co Universal Ecosystem Strip & Static Leaf KO<->EN Enhancer === */
(function () {
  var LEAF_KO_TO_EN = {
    "← 박앤코 법률 인텔리전스 통합 허브 (All 12 Navigators)": "← Park & Co Legal Intelligence Hub (All 12 Navigators)",
    "파트너(820)·485": "Partner (820) & 485",
    "부모비자": "Parent Visas",
    "고용법(FWC)": "Employment Law (FWC)",
    "가족법·재산분할": "Family Law & Property",
    "위기·ART": "Visa Crisis & ART",
    "← 전체 네비게이터 허브": "← All Navigators Hub",
    "박창민 대표변호사 (Chang Min Park)": "Chang Min Park (Principal Solicitor)",
    "\"삶에 집중하세요, 법률은 저희가 맡겠습니다.\"": "\"You focus on life, we'll handle the law.\"",
    "법무법인 박앤코 (PNC Legal Pty Ltd t/a Park & Co Lawyers)": "PNC Legal Pty Ltd t/a Park & Co Lawyers",
    "법령 및 주정부 심사 근거": "Statutory & State Nomination Authority",
    "법령 및 심사 근거": "Statutory & Policy Authority",
    "법령 및 재판소 근거": "Statutory & Tribunal Authority",
    "Schedule 6D (189·190·491) 점수 계산기 ↓": "Schedule 6D (189·190·491) Points Calculator ↓",
    "8개 주정부(QLD~NT) 자격 매칭 & 백과사전": "8-State (QLD–NT) Eligibility Matcher & Compendium",
    "1. 8개 주정부 비교 & 점수 차트": "1. 8-State Comparison & Points Charts",
    "2. Schedule 6D 점수 계산기": "2. Schedule 6D Points Calculator",
    "3. 8개 주정부(QLD~NT) 정밀 매칭기": "3. 8-State (QLD–NT) Eligibility Matcher",
    "4. 491→191 영주권 & 총비용·진단서": "4. 491→191 PR & Total Cost / Brief",
    "변호사 1:1 기술이민·주정부 노미네이션 상담 신청 →": "Request 1:1 Skilled & State Nomination Consultation →",
    "65점": "65 pts",
    "190(+5점) · 491(+15점) 가점 포함": "Incl. 190 (+5 pts) & 491 (+15 pts)",
    "최대 20점": "Max 20 pts",
    "해외(15점)+호주(20점) 통합 상한": "Combined Overseas (15) + AUS (20) Cap",
    "FY26–27 주신청자 (189는 $6,135)": "FY26–27 Primary VAC (189 is $6,135)",
    "$0 하한": "$0 Floor",
    "최저소득 폐지 · ATO NOA 3년치 제출": "No min income · 3 yrs ATO NOAs required",
    "배우자 +$315 · 미성년 자녀 +$160": "Partner +$315 · Child +$160",
    "190·491 최소 거주·근무 개월 수 및 주정부 수수료 비교": "190/491 Minimum Residency/Work Months & State Fee Comparison",
    "그래프 1 · 8개 주/준주 일반 거주자 190 vs 491 필수 근무/거주 개월 수 & 신청비 비교": "Chart 1 · 8-State/Territory Onshore 190 vs 491 Minimum Work/Residency Months & Fees",
    "WA는 491 고용계약·경력 면제 및 신청비 $0이며, QLD는 2025–26부터 190 9개월 / 491 6개월로 강화되었어요.": "WA waives application fees ($0) and 491 job-offer rules; QLD requires 9 months (190) / 6 months (491).",
    "그래프 2 · Schedule 6D 항목별 최대 배점 및 해외+호주 경력 20점 통합 상한(Item 6D51)": "Chart 2 · Schedule 6D Maximum Points & Item 6D51 20-Point Combined Work Experience Cap",
    "나이(30점) + 영어(20점) + 경력합산(최대 20점) + 학력/STEM/호주학업/파트너 + 주정부 가점(+5/+15점).": "Age (30) + English (20) + Combined Work (max 20) + Education/STEM/Study/Partner + State (+5/+15).",
    "Schedule 6D 11대 평가 항목 입력": "Schedule 6D 11-Factor Assessment Inputs",
    "1. 초청 시점 만 나이 (Part 6D.1)": "1. Age at Time of Invitation (Part 6D.1)",
    "만 18세 ~ 24세 (25점)": "Aged 18–24 (25 pts)",
    "만 25세 ~ 32세 (30점 — 최고 배점)": "Aged 25–32 (30 pts — Maximum)",
    "만 33세 ~ 39세 (25점)": "Aged 33–39 (25 pts)",
    "만 40세 ~ 44세 (15점)": "Aged 40–44 (15 pts)",
    "만 45세 이상 (0점 — GSM 189/190/491 신청 불가)": "Aged 45+ (0 pts — Ineligible for GSM 189/190/491)",
    "2. 영어 능력 (Part 6D.2 — 유효기간 3년)": "2. English Language Ability (Part 6D.2 — 3-Year Validity)",
    "Competent English — IELTS 각 6.0 / PTE 50 (0점 · 최소 기본요건)": "Competent English — IELTS 6.0 / PTE 50 (0 pts · Minimum Threshold)",
    "Proficient English — IELTS 각 7.0 / PTE 65 (10점)": "Proficient English — IELTS 7.0 / PTE 65 (10 pts)",
    "Superior English — IELTS 각 8.0 / PTE 79 (20점)": "Superior English — IELTS 8.0 / PTE 79 (20 pts)",
    "3. 해외 숙련 경력 (Part 6D.3 — 최근 10년 내 주 20h+)": "3. Overseas Skilled Employment (Part 6D.3 — 20h+/wk in last 10 yrs)",
    "3년 미만 (0점)": "Under 3 years (0 pts)",
    "3년 이상 ~ 5년 미만 (5점)": "3 to <5 years (5 pts)",
    "5년 이상 ~ 8년 미만 (10점)": "5 to <8 years (10 pts)",
    "8년 이상 (15점)": "8+ years (15 pts)",
    "4. 호주 내 숙련 경력 (Part 6D.4 — 최근 10년 내 주 20h+)": "4. Australian Skilled Employment (Part 6D.4 — 20h+/wk in last 10 yrs)",
    "1년 미만 (0점)": "Under 1 year (0 pts)",
    "1년 이상 ~ 3년 미만 (5점)": "1 to <3 years (5 pts)",
    "8년 이상 (20점)": "8+ years (20 pts)",
    "5. 최종 학력/자격 (Part 6D.7)": "5. Educational Qualifications (Part 6D.7)",
    "박사 학위 (Doctorate / PhD — 20점)": "Doctorate / PhD (20 pts)",
    "학사(Bachelor) 또는 석사(Masters) 학위 (15점)": "Bachelor or Masters Degree (15 pts)",
    "호주 Diploma / Trade 학위 또는 기술심사기관 인정 자격 (10점)": "Australian Diploma / Trade Qualification or Recognised Award (10 pts)",
    "인정 학력 없음 (0점)": "No Recognised Qualification (0 pts)",
    "6. 배우자/파트너 자격 또는 미혼 (Part 6D.11)": "6. Partner Skills or Single Status (Part 6D.11)",
    "미혼(Single) 또는 파트너가 호주 시민권자/영주권자 (10점 — 6D112)": "Single OR Partner is Australian Citizen/PR (10 pts — 6D112)",
    "파트너가 만 45세 미만 + Competent 영어 + 동일 리스트 기술심사 보유 (10점 — 6D111)": "Partner <45 + Competent English + Skilled Assessment (10 pts — 6D111)",
    "파트너가 Competent 영어(IELTS 6.0)만 보유 (5점 — 6D113)": "Partner has Competent English (IELTS 6.0) only (5 pts — 6D113)",
    "파트너가 시민권/영주권자가 아니며 영어/기술심사 미보유 (0점)": "Partner is non-citizen/PR without English or Skills Assessment (0 pts)",
    "7. 추가 가점 항목 (해당 항목 모두 체크 — Part 6D.6 / 6D.7A / 6D.8 / 6D.9 / 6D.10)": "7. Bonus Point Factors (Tick all that apply — Parts 6D.6–6D.10)",
    "Subclass 189 · 190 · 491 법정 점수 산출 결과": "Subclass 189 · 190 · 491 Statutory Points Breakdown",
    "8개 주/준주 중 현재 바로 노미네이션 신청(또는 ROI/Matrix 접수)이 가능한 주와 부족한 개월 수를 즉시 판정": "Instantly identify eligible States/Territories and any remaining residency/work months required",
    "내 거주지 · 근무 개월 · 주당 시간 · 졸업생 프로필 입력": "Your Current State, Work Months, Weekly Hours & Graduate Profile",
    "1. 현재 거주 중인 주/준주 (또는 해외)": "1. Current State/Territory of Residence (or Offshore)",
    "Queensland (QLD — 브리즈번 / 골드코스트·지방 QLD)": "Queensland (QLD — Brisbane / Gold Coast & Regional QLD)",
    "New South Wales (NSW — 시드니 / 지방 NSW)": "New South Wales (NSW — Sydney / Regional NSW)",
    "Victoria (VIC — 멜버른 / 지방 VIC)": "Victoria (VIC — Melbourne / Regional VIC)",
    "Western Australia (WA — 퍼스 및 서호주 전역)": "Western Australia (WA — Perth & Statewide WA)",
    "South Australia (SA — 애들레이드 및 외곽 SA)": "South Australia (SA — Adelaide & Regional SA)",
    "Tasmania (TAS — 호바트·론세스턴 등 전역)": "Tasmania (TAS — Hobart, Launceston & Statewide)",
    "Australian Capital Territory (ACT — 캔버라)": "Australian Capital Territory (ACT — Canberra)",
    "Northern Territory (NT — 다윈·앨리스스프링스 등)": "Northern Territory (NT — Darwin & Regional NT)",
    "해외 거주 중 (Offshore — 한국 등 호주 외 거주)": "Residing Offshore (Outside Australia)",
    "2. 직군 산업 분야 (Priority Sector)": "2. Occupation Industry Sector",
    "일반 기술·전문직·기능직 (General CSOL/State List)": "General Skilled / Professional / Trade Occupation",
    "건축·건설·트레이드 (Building & Construction — QLD·WA·SA 최우선 우대)": "Building & Construction Trades (Priority in QLD, WA, SA)",
    "보건·의료·간호·교육·사회복지 (Health, Nursing, Teaching, Social Work)": "Health, Nursing, Teaching & Social Work",
    "3. 현 거주 주(State) 연속 거주 개월 수 (개월)": "3. Continuous Residency in Current State (Months)",
    "4. 현 거주 주 내 숙련 직무 연속 근무 개월 수 (개월)": "4. Continuous Skilled Employment in Current State (Months)",
    "5. 주당 평균 유급 근무시간 (시간/주)": "5. Average Paid Working Hours per Week",
    "주 35~38시간 이상 (Full-time — 전 주정부 190/491 기준 충족)": "35–38+ hrs/wk (Full-time — Meets all State 190/491 thresholds)",
    "주 30시간 이상 (QLD·SA·ACT 190 기준 충족)": "30+ hrs/wk (Meets QLD, SA, ACT 190 thresholds)",
    "주 20시간 이상 (NSW·TAS·SA 491 기준 충족)": "20+ hrs/wk (Meets NSW, TAS, SA 491 thresholds)",
    "주 15시간 이상 (ACT 491 13/15주 기준 충족)": "15+ hrs/wk (Meets ACT 491 threshold)",
    "현재 미취업 (졸업생 무경력 스트림 또는 해외 경력 활용)": "Currently Unemployed (Graduate stream or offshore experience)",
    "6. 현 거주 주(State) 내 대학/VET 졸업 여부": "6. Graduate of a University/VET Institution in Current State?",
    "아니오 (일반 숙련 근로자 스트림)": "No (Standard Skilled Worker Stream)",
    "예 — 해당 주에서 학사/석사/학위(2년+) 졸업 (Regional NSW·WA·TAS·SA·NT 졸업생 특례)": "Yes — Bachelor/Masters (2+ yrs) in this State (Graduate concessions)",
    "예 — 해당 주에서 박사(PhD) 학위 취득 (ACT 무료·자동초청 / QLD·WA·SA 우대)": "Yes — Doctorate (PhD) completed in this State (Priority stream)",
    "예 — 해당 주에서 2년 이상 VET (Cert III/IV/Diploma) 졸업 (WA·TAS·SA 졸업생)": "Yes — 2+ yr VET (Cert III/IV/Diploma) in this State",
    "내 프로필 기준 주정부 노미네이션(190 · 491) 적격 판정": "State Nomination (190 · 491) Eligibility Assessment",
    "8개 주/준주별 190·491 세부 스트림 · 거주/근무/고용계약 · 수수료 · 숨은 함정 총정리": "8-State/Territory 190 & 491 Streams, Residency/Work Rules, Fees & Key Traps",
    "QLD (퀸즐랜드)": "QLD (Queensland)",
    "NSW (뉴사우스웨일스)": "NSW (New South Wales)",
    "VIC (빅토리아)": "VIC (Victoria)",
    "WA (서호주)": "WA (Western Australia)",
    "SA (남호주)": "SA (South Australia)",
    "TAS (태즈메이니아)": "TAS (Tasmania)",
    "ACT (캔버라)": "ACT (Canberra)",
    "NT (노던준주)": "NT (Northern Territory)",
    "최저소득 폐지($0 기준 · NOA 3년치 제출)": "No Minimum Income ($0 floor · 3 ATO NOAs required)",
    "주정부 노미네이션 수수료 + FY2026–27 연방 비자비(VAC) 총합": "State Nomination Fee + FY2026–27 Federal VAC Total",
    "비자 종류 · 노미네이션 주 · 가족 수 · [491/494 전용] 191 전환 요건": "Visa Subclass, Nominating State, Family Size & [491/494 Only] 191 PR Check",
    "1. 신청 비자 서브클래스": "1. Target Visa Subclass",
    "Subclass 491 — 지방 주정부/가족 지명 임시 5년 (3년 후 191 영주권 전환 대상 · VAC $6,140)": "Subclass 491 — Regional Provisional 5-Yr (Eligible for 191 PR after 3 yrs · VAC $6,140)",
    "Subclass 191 — [491/494 소지자 전용] 3년 후 영주권 전환 신청 (VAC $630 · 주정부 비용 $0)": "Subclass 191 — [491/494 Holders Only] 3-Yr PR Transition (VAC $630 · State Fee $0)",
    "Subclass 190 — 주정부 지명 영주비자 (처음부터 영주권 Direct PR · 191 전환 대상 아님 · VAC $6,140)": "Subclass 190 — State Nominated Direct PR (Direct PR · Not a 191 pathway · VAC $6,140)",
    "Subclass 189 — 독립기술 영주비자 (처음부터 영주권 Direct PR · 주정부/191 대상 아님 · VAC $6,135)": "Subclass 189 — Skilled Independent Direct PR (Direct PR · Not a 191 pathway · VAC $6,135)",
    "2. 노미네이션 신청 주/준주 (190·491만 해당)": "2. Nominating State/Territory (190 & 491 Only)",
    "QLD — $630.30 (Onshore GST 포함)": "QLD — $630.30 (incl. Onshore GST)",
    "NSW — $346.50 (Onshore GST 포함)": "NSW — $346.50 (incl. Onshore GST)",
    "WA — $0 (서호주 주정부 신청비 전면 무료!)": "WA — $0 (Western Australia $0 Nomination Fee)",
    "3. 동반 성인 가족 수 (만 18세 이상 배우자 등)": "3. Accompanying Adult Applicants (18+ Partner/Dependants)",
    "0명 (단독 신청)": "0 (Single Applicant)",
    "1명 (+$3,070 / 191은 +$315)": "1 Adult (+$3,070 / 191 is +$315)",
    "1명 (배우자 동반)": "1 Adult (Accompanying Partner)",
    "2명": "2",
    "3명": "3",
    "0명": "0",
    "1명": "1",
    "4. 동반 미성년 자녀 수 (만 18세 미만)": "4. Accompanying Minor Children (Under 18)",
    "1명 (+$1,535 / 189는 +$1,540 / 191은 +$160)": "1 Child (+$1,535 / 189 is +$1,540 / 191 is +$160)",
    "5. [491/494 소지자 전용] 보유 기간 & ATO NOA 수": "5. [491/494 Holders Only] Years Held & ATO NOAs",
    "491/494 보유 3년 이상 + ATO Notice of Assessment 3개 연도 확보 완료": "Held 491/494 for 3+ yrs + 3 income years of ATO NOAs ready",
    "아직 3년 미만 보유 중 (5년 비자 기간 중 총 3개 과세연도 NOA 확보 필요)": "Held <3 yrs (Must complete 3 years and 3 ATO NOAs within 5-yr validity)",
    "6. [491/494 소지자 전용] 지방 거주·근무 조건(8579) 준수": "6. [491/494 Holders Only] Condition 8579 Regional Compliance",
    "준수 완료 — 지정 지방(Designated Regional Area) 내 거주·근무·학업 유지": "Compliant — Resided, worked & studied exclusively in Designated Regional Areas",
    "주의 필요 — 대도시(시드니·멜버른·브리즈번) 장기 체류 또는 주소 변경 미신고(8578)": "Caution — Extended metro stay (Sydney/Melbourne/Brisbane) or unnotified address (8578)",
    "FY2026–27 총비용 & Subclass 191 영주권 전환 판정": "FY2026–27 Total Statutory Cost & Subclass 191 PR Assessment",
    "내 기술이민 점수(Schedule 6D) & 주정부 노미네이션 진단서 복사 · 인쇄(PDF) & 상담 메일 발송": "Copy, Print (PDF) & Email Your GSM Points & State Nomination Brief",
    "위 모듈에서 계산된 189·190·491 점수, 거주 주 노미네이션 적격 판정, 총비용 요약문을 즉시 복사하거나 상담 메일에 첨부할 수 있어요.": "Copy or email your calculated 189/190/491 points, state nomination eligibility, and fee breakdown directly to Park & Co.",
    "📋 진단 요약 클립보드 복사": "📋 Copy Diagnostic Summary",
    "📋 긴급 진단서 클립보드 복사": "📋 Copy Urgent Diagnostic Brief",
    "🖨️ PDF / 브리프 인쇄": "🖨️ Print / Save PDF",
    "✉️ 진단 결과 담아 박앤코에 이메일 문의 →": "✉️ Email Diagnostic Brief to Park & Co →",
    "🚨 진단 결과 담아 박앤코 긴급 자문 요청 →": "🚨 Email Urgent Brief to Park & Co →",
    "구분": "Category",
    "공식 법령 · 주정부 이민 포털 및 링크": "Official Legislation / State Portal & Link",
    "공식 문서명 및 링크": "Official Instrument / Source & Link",
    "공식 법령 · 재판소 안내 및 링크": "Official Legislation / Tribunal Guide & Link",
    "관할 기관": "Authority",
    "추적 지표": "Monitored Metrics",
    "검증 주기": "Schedule",
    "상태": "Status",
    "법률 면책공고 (Legal Disclaimer) · 주정부 노미네이션 할당량(Quota) 안내": "Legal Disclaimer & State Nomination Quota Notice",
    "법률 면책공고 (Legal Disclaimer) · Migration Act s 245AR 비용 전가 금지 안내": "Legal Disclaimer & Migration Act s 245AR Prohibition Notice",
    "법률 면책공고 (Legal Disclaimer) · 송달 간주 규정(s 494B / s 494C) 안내": "Legal Disclaimer & Deemed Notification Rules (s 494B / s 494C)",
    "연방 Schedule 6D & 8개 주정부 포털 실시간 모니터 (12/12 Live Verified)": "Federal Schedule 6D & 8-State Portal Live Monitor (12/12 Verified)",
    "공식 1차 출처 실시간 모니터 (12/12 Live Verified)": "Official Primary Source Live Monitor (12/12 Verified)",
    "공식 1차 법령·ART 출처 실시간 모니터 (12/12 Live Verified)": "Official Statutory & ART Primary Source Monitor (12/12 Verified)",
    "비자 만료 시까지 (Until Visa Expiry)": "Until Visa Expiry (LIN 22/012 & LIN 22/013)",
    "28 역일": "28 Calendar Days",
    "일반 비자·노미네이션 거절 (reg 4.10)": "Standard Onshore Visa/Nomination Refusal (reg 4.10)",
    "7 영업일": "7 Working Days",
    "호주 내 일반 비자 취소 · 구금 재심": "Onshore s 116 Cancellation / Detention Review",
    "9일 / 28일": "9 Days / 28 Days",
    "ART 재심 9일(s 500(6B)) · 철회 28일": "ART s 500(6B) 9d · Revocation Request 28d",
    "+ 파트너(820) · 의료(602) · 보호(866)": "+ Partner (820) · Medical (602) · Protection (866)",
    "3년 / 10년": "3 Yrs / 10 Yrs",
    "허위서류 3년(Waiver유) · 신원 10년(무)": "Bogus Doc 3yr (Waivable) · Identity 10yr (No Waiver)",
    "35 역일": "35 Calendar Days",
    "ART 기각 후 관할권 오류 사법심사(s 477)": "FCFCOA Judicial Review after ART Dismissal (s 477)",
    "2. ART 재심 · s 501 데드라인 계산기": "2. ART Review & s 501 Deadline Calculator",
    "3. Section 48 Bar 예외 비자 진단": "3. Section 48 Bar Exempt Visa Checker",
    "긴급 비자 거절·취소 1:1 변호사 자문 요청 →": "Request Urgent 1:1 Refusal/Cancellation Legal Advice →"
  };

  function applyUniversalLeafTranslation(lang) {
    var isEn = lang === "en";
    document.querySelectorAll(".parkco-svc-link").forEach(function (lnk) {
      var h = isEn ? lnk.getAttribute("data-en-href") : lnk.getAttribute("data-ko-href");
      if (h) lnk.setAttribute("href", h);
    });
    var walk = function (el) {
      if (!el || el.tagName === "SCRIPT" || el.tagName === "STYLE" || el.tagName === "PRE") return;
      var hasElementChildren = false;
      for (var i = 0; i < el.children.length; i++) {
        if (el.children[i].tagName !== "BR") {
          hasElementChildren = true;
          break;
        }
      }
      if (!hasElementChildren) {
        var raw = (el.textContent || "").trim().replace(/\s+/g, " ");
        if (!el.getAttribute("data-ko-leaf") && /[가-힣]/.test(raw) && raw.indexOf("한국어") === -1) {
          el.setAttribute("data-ko-leaf", el.textContent);
        }
        var koOrig = el.getAttribute("data-ko-leaf");
        if (koOrig) {
          var normKo = koOrig.trim().replace(/\s+/g, " ");
          if (isEn) {
            if (LEAF_KO_TO_EN[normKo]) {
              el.textContent = LEAF_KO_TO_EN[normKo];
            } else if (normKo.indexOf("(") !== -1 && /[A-Za-z]/.test(normKo)) {
              /* If option has bilingual text like '1월 (Jan)' or '만 67세 미만 (Under 67)', extract English or keep clean */
            }
          } else {
            el.textContent = koOrig;
          }
        }
      }
      for (var j = 0; j < el.children.length; j++) {
        walk(el.children[j]);
      }
    };
    walk(document.body);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var btns = document.querySelectorAll("#lang-en, #lang-ko, #lang-toggle-en, #lang-toggle-ko, .lang-btn");
    btns.forEach(function (b) {
      b.addEventListener("click", function () {
        var isEn = (b.id && b.id.indexOf("en") !== -1) || b.getAttribute("data-lang") === "en";
        document.documentElement.lang = isEn ? "en" : "ko";
        setTimeout(function () { applyUniversalLeafTranslation(isEn ? "en" : "ko"); }, 20);
      });
    });

    var params = new URLSearchParams(window.location.search);
    if (params.get("lang") === "en") {
      var enBtn = document.getElementById("lang-en") || document.getElementById("lang-toggle-en") || document.querySelector('[data-lang="en"]');
      if (enBtn) {
        enBtn.click();
        setTimeout(function () { applyUniversalLeafTranslation("en"); }, 40);
      }
    }
  });
})();
