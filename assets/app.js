/* PNC Legal Pty Ltd t/a Park & Co Lawyers · SID 482 · ENS 186 · SESR 494 Employer Sponsored Visa Navigator */
(function () {
  "use strict";

  const DEFAULT_SOURCES = [{"id": "dha_sid_482", "category": "DHA Subclass Page", "name_ko": "Skills in Demand (SID) 비자 (Subclass 482) 공식 안내", "name_en": "Skills in Demand (SID) Visa (Subclass 482) Official Page", "authority": "Department of Home Affairs", "url": "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/temporary-skill-shortage-482", "method": "SharePoint PageSchemaHiddenField JSON + GetPriceList API", "cadence": "Weekly (VAC on 1 July)", "tracks": "3 Streams (Core Skills $79,423, Specialist Skills $146,576, Labour Agreement), 1-Yr FTE Work Exp, Base VAC $4,015", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-11-09T07:40:20+10:00", "last_verified_ok": "2026-11-09T07:40:20+10:00", "sha256_prefix": "766674f2e5cfa204", "content_length": 1297273, "live_method": "https-direct-live"}, {"id": "dha_ens_186", "category": "DHA Subclass Page", "name_ko": "고용주 지명 영주비자 (ENS Subclass 186 · TRT / Direct Entry / LA)", "name_en": "Employer Nomination Scheme (ENS Subclass 186 · TRT / DE / LA)", "authority": "Department of Home Affairs", "url": "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/employer-nomination-scheme-186", "method": "SharePoint PageSchemaHiddenField JSON", "cadence": "Weekly (VAC on 1 July)", "tracks": "TRT 2-Year (from 482/457 across any approved sponsors), Direct Entry (3-yr exp + Skills Assessment), Base VAC $6,140", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-11-09T07:40:20+10:00", "last_verified_ok": "2026-11-09T07:40:20+10:00", "sha256_prefix": "2a17f1136d9696ae", "content_length": 1297163, "live_method": "https-direct-live"}, {"id": "dha_sesr_494", "category": "DHA Subclass Page", "name_ko": "지방 고용주 스폰서 임시비자 (SESR Subclass 494)", "name_en": "Skilled Employer Sponsored Regional (Provisional) Visa (Subclass 494)", "authority": "Department of Home Affairs", "url": "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-employer-sponsored-regional-494", "method": "SharePoint PageSchemaHiddenField JSON", "cadence": "Weekly", "tracks": "Regional postcode eligibility, 3-yr work exp (unless DAMA concession), PR 191 pathway after 3 yrs, Base VAC $6,140", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-11-09T07:40:20+10:00", "last_verified_ok": "2026-11-09T07:40:20+10:00", "sha256_prefix": "27b26233c92d070a", "content_length": 1297897, "live_method": "https-direct-live"}, {"id": "dha_salary_thresholds", "category": "Income Thresholds (F06)", "name_ko": "고용주 스폰서 소득 기준 (CSIT $79,423 · SSIT $146,576) 및 AMSR(IMMI 18/033) 공식 안내", "name_en": "Nomination Salary Thresholds (CSIT & SSIT Indexed 1 July) & AMSR Rules (IMMI 18/033)", "authority": "Department of Home Affairs", "url": "https://immi.homeaffairs.gov.au/visas/employing-and-sponsoring-someone/sponsoring-workers/nominating-a-position/salary-requirements", "method": "PageSchemaHiddenField JSON + AWOTE Indexation Verification", "cadence": "Annually (1 July AWOTE Indexation)", "tracks": "FY26-27 CSIT $79,423 (up from $76,515 FY25-26 & $73,150 Dec 2024), SSIT $146,576 (up from $141,210), AMSR 2x2 rule", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-11-09T07:40:20+10:00", "last_verified_ok": "2026-11-09T07:40:20+10:00", "sha256_prefix": "e93bbee8341e93c5", "content_length": 1312940, "live_method": "https-direct-live"}, {"id": "abf_sponsor_sanctions_api", "category": "ABF Enforcement API (F02)", "name_ko": "ABF 스폰서 제재 레지스터 (s 140K(4) · 1,842건) 및 금지 고용주 명단 (s 245AYM)", "name_en": "ABF Register of Sanctioned Sponsors (s 140K(4) · 1,842 Records) & Prohibited Employers (s 245AYM)", "authority": "Australian Border Force (CC BY 3.0 AU)", "url": "https://www.abf.gov.au/about-us/what-we-do/sponsor-sanctions/register-of-sanctioned-sponsors", "method": "SharePoint ContextInfo + GetSanctionsData POST JSON API", "cadence": "Daily", "tracks": "1,842 sponsor sanctions (reg 2.79, 2.82, 2.83, 2.84, 2.86 breaches) & s 245AYM prohibited employer declarations", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-11-09T07:40:20+10:00", "last_verified_ok": "2026-11-09T07:40:20+10:00", "sha256_prefix": "e0255a228e9be260", "content_length": 2827426, "live_method": "https-direct-live"}, {"id": "dha_csol_list", "category": "Legislative Instrument (F04)", "name_ko": "Core Skills Occupation List (CSOL · 456개 직군, LIN 24/089)", "name_en": "Core Skills Occupation List (CSOL · 456 Occupations, LIN 24/089)", "authority": "Federal Register of Legislation", "url": "https://www.legislation.gov.au/F2024L01620/latest/text", "method": "FRL Compilation Store (F2024L01620)", "cadence": "Monthly", "tracks": "456 occupations eligible for SID 482 Core Skills stream and ENS 186 Direct Entry stream", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-11-09T07:40:20+10:00", "last_verified_ok": "2026-11-09T07:40:20+10:00", "sha256_prefix": "48b13fc4d15a0390", "content_length": 29506, "live_method": "frl-legis-store-c3-F2025C01064", "compilation": "3", "register_id": "F2025C01064", "effective_start": "2025-11-07", "clause_count": 8}, {"id": "migration_regs_1994", "category": "Primary Legislation (F04)", "name_ko": "Migration Regulations 1994 · reg 2.72(15) AMSR, reg 2.79~2.87 스폰서 의무, reg 5.19 & 8607", "name_en": "Migration Regulations 1994 · reg 2.72(15) AMSR, reg 2.79–2.87 Obligations, reg 5.19 & 8607", "authority": "Federal Register of Legislation", "url": "https://www.legislation.gov.au/F1996B03551/latest/text", "method": "FRL Compilation Store (F1996B03551)", "cadence": "Monthly", "tracks": "reg 2.72(15) AMSR, reg 2.79-2.87 sponsor obligations, reg 5.19 (ENS 186 TRT 2-yr), Sch 8 Condition 8607 (180/365d)", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-11-09T07:40:20+10:00", "last_verified_ok": "2026-11-09T07:40:20+10:00", "sha256_prefix": "a964fbdacae4f71a", "content_length": 3580174, "live_method": "frl-legis-store-c289-F2026C01017", "compilation": "289", "register_id": "F2026C01017", "effective_start": "2026-10-02", "clause_count": 2599}, {"id": "migration_amendment_2024_sid", "category": "Primary Legislation (F04)", "name_ko": "Migration Amendment (Work Related Visa Conditions) Regulations 2024 · 180/365일 이직 허용", "name_en": "Migration Amendment (Work Related Visa Conditions) Regulations 2024 · 180/365-Day Mobility", "authority": "Federal Register of Legislation", "url": "https://www.legislation.gov.au/F2024L00776/latest/text", "method": "FRL Compilation Store (F2024L00776)", "cadence": "Quarterly", "tracks": "Amends Condition 8107/8607/8608 to allow up to 180 consecutive days and 365 cumulative days between sponsors", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-11-09T07:40:20+10:00", "last_verified_ok": "2026-11-09T07:40:20+10:00", "sha256_prefix": "7fc93927c81bb39a", "content_length": 4868, "live_method": "frl-legis-store-c0-F2024L00776", "compilation": "0", "register_id": "F2024L00776", "effective_start": "2024-06-25", "clause_count": 6}, {"id": "saf_levy_charges_act", "category": "Primary Legislation (F04)", "name_ko": "Migration (Skilling Australians Fund) Charges Regulations 2018 · SAF Levy 산정", "name_en": "Migration (Skilling Australians Fund) Charges Regulations 2018 · SAF Levy Rates", "authority": "Federal Register of Legislation", "url": "https://www.legislation.gov.au/F2018L01092/latest/text", "method": "FRL Compilation Store (F2018L01092)", "cadence": "Quarterly", "tracks": "Turnover <$10M: $1,200/yr (482) & $3,000 (186/494); Turnover >=$10M: $1,800/yr (482) & $5,000 (186/494)", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-11-09T07:40:20+10:00", "last_verified_ok": "2026-11-09T07:40:20+10:00", "sha256_prefix": "f873d3d9388786e6", "content_length": 7515, "live_method": "frl-legis-store-c2-F2024C01233", "compilation": "2", "register_id": "F2024C01233", "effective_start": "2024-12-07", "clause_count": 6}, {"id": "migration_act_245ar", "category": "Primary Legislation (F04)", "name_ko": "Migration Act 1958 (C1958A00062) · s 140K 제재 · s 245AR 비용전가 금지 · s 245AYM 금지 고용주", "name_en": "Migration Act 1958 (C1958A00062) · s 140K Sanctions · s 245AR Recovery Ban · s 245AYM Prohibited Employers", "authority": "Federal Register of Legislation", "url": "https://www.legislation.gov.au/C1958A00062/latest/text", "method": "FRL Compilation Store (C1958A00062)", "cadence": "Quarterly", "tracks": "s 140K(4) public sanction register, s 245AR/245AS sponsorship cost recovery ban, s 245AYM prohibited employer bar", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-11-09T07:40:20+10:00", "last_verified_ok": "2026-11-09T07:40:20+10:00", "sha256_prefix": "22cc03a0b0a72db0", "content_length": 1747244, "live_method": "frl-legis-store-c172-C2026C00461", "compilation": "172", "register_id": "C2026C00461", "effective_start": "2026-10-08", "clause_count": 959}, {"id": "dha_visa_pricing_api", "category": "DHA Pricing API", "name_ko": "이민성 비자 신청비 (VAC) 실시간 조회 API (GetPriceList · FY2026-27)", "name_en": "Home Affairs Live Visa Pricing API (GetPriceList · FY2026-27)", "authority": "Department of Home Affairs", "url": "https://immi.homeaffairs.gov.au/_layouts/15/api/data.aspx/GetPriceList", "method": "JSON POST API", "cadence": "Monthly (1 July Indexation)", "tracks": "482 Base $4,015 (18+ $4,015, <18 $1,005); 186 & 494 Base $6,140 (18+ $3,070, <18 $1,535)", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-11-09T07:40:20+10:00", "last_verified_ok": "2026-11-09T07:40:20+10:00", "sha256_prefix": "0ab169e8525c9030", "content_length": 247792, "live_method": "dha-json-api-post"}, {"id": "dha_processing_times_api", "category": "DHA Processing API", "name_ko": "이민성 비자 심사기간 안내 가이드 (GetProcessingTime · 482/186/494)", "name_en": "Home Affairs Visa Processing Time Guide API (482/186/494)", "authority": "Department of Home Affairs", "url": "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-processing-times/global-visa-processing-times", "method": "JSON API", "cadence": "Monthly", "tracks": "SID 482 Specialist (7-14 days target), Core Skills (~4-8 weeks), ENS 186 TRT/DE (~6-14 months)", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-11-09T07:40:20+10:00", "last_verified_ok": "2026-11-09T07:40:20+10:00", "sha256_prefix": "171461676cedd1aa", "content_length": 1307873, "live_method": "https-direct-live"}, {"id": "dha_dama_framework", "category": "DHA Labour Agreement", "name_ko": "Designated Area Migration Agreements (DAMA) 13개 지역 협정 안내", "name_en": "Designated Area Migration Agreements (DAMA) Official Overview", "authority": "Department of Home Affairs", "url": "https://immi.homeaffairs.gov.au/visas/working-in-australia/regional-migration/dama", "method": "SharePoint PageSchemaHiddenField JSON", "cadence": "Monthly", "tracks": "90% CSIT concession ($71,481 in FY26-27), Age 50/55 concession, Skill Level 1-5 occupations across 13 regions", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-11-09T07:40:20+10:00", "last_verified_ok": "2026-11-09T07:40:20+10:00", "sha256_prefix": "82a35e899b9a485b", "content_length": 1300560, "live_method": "https-direct-live"}, {"id": "art_nomination_refusal_stats", "category": "ART Nomination & 482 Review Stats", "name_ko": "행정재심기구 (ART) 고용주 노미네이션 거절 폭증 (Working/Skilled 재심의 86.70% = 3,078건) 및 482 인용률(83.33%) 통계", "name_en": "ART Employer Nomination Refusal Surge (86.70% = 3,078 of 3,550 Working/Skilled Lodgements) & 482 Set Aside (83.33%)", "authority": "Administrative Review Tribunal (ART)", "url": "https://www.art.gov.au/sites/default/files/2026-08/Migration-Detailed-Caseload-Statistics-2026-27.pdf", "method": "Official Caseload PDF + Dual-Denominator Validator", "cadence": "Monthly", "tracks": "Employer Nomination Refusals: 3,078 lodged (86.70% of Working/Skilled · 8,598 on-hand · p50 1y 6m) | Subclass 482 Restricted Set Aside: 83.33% (100/120) | DHA Employer Sponsored On-Hand: 69,896", "status": "verified_ok", "freshness": "live_verified", "http_status": 200, "last_checked": "2026-11-09T07:40:20+10:00", "last_verified_ok": "2026-11-09T07:40:20+10:00", "sha256_prefix": "fe57c01188167f6b", "content_length": 974695, "live_method": "art-caseload-pdf-live"}];
  const DEFAULT_ABF_DATA = {"status": "verified_ok", "http_status": 200, "bytes": 2827426, "sha256": "e0255a228e9be260709846205b0d9ecb291002124247c62e2d1946ea496dc4e4", "sha256_prefix": "e0255a228e9be260", "prohibited_sha256_prefix": "c89948bdd84b989b", "license": "CC BY 3.0 AU (Migration Act 1958 s 140K(4) & s 245AYM Statutory Public Registers)", "total_sanctions": 1850, "active_sanction_bars": 124, "historical_expired_count": 1726, "infringement_notices_count": 184, "prohibited_employers_count": 1, "by_state": {"QLD": 501, "NSW": 449, "VIC": 390, "WA": 272, "SA": 165, "NT": 31, "ACT": 26, "TAS": 16}, "by_obligation": {"2.84": 727, "2.86": 500, "2.83": 359, "2.79": 273, "2.82": 192, "2.84 x 2": 133, "2.79 x 2": 108, "2.86 x 2": 104, "2.87": 67, "2.79 x 3": 59, "2.84 x 3": 53, "2.83 x 2": 50, "2.82 x 2": 48, "2.86 x 3": 37, "2.82 x 3": 27, "2.79 x 4": 22, "2.87 x 2": 21, "2.83 x 3": 13, "2.87C": 13, "2.79 x 6": 12, "2.79 x 8": 12, "2.79 x 5": 11, "2.84 x 4": 11, "2.86 x 4": 10, "2.82 x 4": 9, "2.79 x 9": 9, "2.80": 8, "2.83 x 4": 8, "2.79 x 24": 7, "2.79 x 25": 7, "2.79 x 13": 7, "2.79 x 14": 7, "2.84 x 1": 7, "2.78": 6, "2.84 x 5": 6, "2.79 x 11": 6, "2.79 x 10": 6, "r2.84 x 1": 6, "2.86 x 5": 5, "2.82 x 5": 5, "2.82 x 7": 5, "2.79 x 7": 5, "2.79 x 30": 5, "2.79 x 15": 5, "2.86 x 1": 5, "2.90": 5, "2.87 x 3": 4, "2.79 x 21": 4, "2.87B": 4, "2.79 x 52": 4, "2.79 x 17": 4, "2.79 x 23": 4, "2.86 x 6": 3, "2.82 x 6": 3, "2.84 x 6": 3, "2.82 x 10": 3, "2.79 x 26": 3, "2.79 x 68": 3, "2.79 x 18": 3, "R 2.79 x 1": 3, "2.84 X1": 3, "2.79 x 12": 3, "2.82 x 12": 2, "2.86 x 16": 2, "2.83 x 5": 2, "2.84 x2": 2, "2.79 x 31": 2, "2.84 x 7": 2, "2.82 x 14": 2, "2.82 x 8": 2, "2.79 x 33": 2, "2.79 x 19": 2, "2.86 x 8": 2, "2.79 x 28": 2, "2.79 x 48": 2, "2.84 x 10": 2, "2.79 x 27": 2, "2.83 X1": 2, "2.84 X2": 2, "2.86 X2": 2, "2.83 x 1": 2, "2.83 x 6": 2, "2.87 x 23": 1, "2.82 x 25": 1, "2.86 x 11": 1, "2.86 x 10": 1, "2.84 x 13": 1, "2.80 x 7": 1, "2.84 x 9": 1, "r2.83 x 3": 1, "2.79 x3": 1, "2.87B x 2": 1, "2.79 x 66": 1, "2.82 x 17": 1, "2.79 X 3": 1, "2.84 x 2. 2.87B": 1, "2.79(3) x 13": 1, "2.87C x 3": 1, "2.80 x 2": 1, "2.8": 1, "2.80 x 3": 1, "2.87B x 3": 1, "2.79 x 196": 1, "2.82 x 11": 1, "2.79 x 74": 1, "2.79 x 45": 1, "2.84 x 26": 1, "2.86 x 25": 1, "2.79 x 41": 1, "2.79 x 38": 1, "2.79  x 13": 1, ".2.86": 1, "2.79 x 55": 1, "2.79 x 44": 1, "2.82 x 13": 1, "2.86 x 13": 1, "2.87 x 13": 1, "2.79 x 37": 1, "2.79 x 56": 1, "2.79 x 53": 1, "2.87c": 1, "Regs 2.86 x 2.87": 1, "Regs 2.79 x 62": 1, "Regs 2.79 x 52": 1, "Regs 2.84": 1, "Regs 2.79": 1, "2.79 x 22": 1, "2.82 x 28": 1, "Regs 2.79 x 2": 1, "2.79 x 51": 1, "Regs 2.79 x 28": 1, "2": 1, "Regs 2.86": 1, "Regs 2.79 x 5": 1, "Regs 2.79 x 12": 1, "Reg 2.79 x 1": 1, "Reg 2.86 x 1": 1, "2.85 x 5": 1, "2.79 x 34": 1, "2.86 x 7": 1, "Reg 2.79": 1, "2.79 x 20": 1, "2.79A x 20": 1, "2.84x4": 1, "2.84x2": 1, "2.79A": 1, "2.82 x 2.83 x 2.86 x 2": 1, "2.79 x 32": 1, "r2.79 x 4": 1, "r2.83 x 2": 1, "R 2.82 x 1": 1, "R 2.79 x 3": 1, "R2.79 x 3": 1, "2.79 X 14": 1, "2.90 x 2": 1, "2.79X2": 1, "2.79 X2": 1, "2.83 X2": 1, "2.79 X3": 1, "r2.79 X3": 1, "r2.83 x3": 1, "r2.86 x2": 1, "r2.87 x3": 1, "r2.83 x 1": 1, "r2.86 x 1": 1, "r2.87 x1": 1, "[r2.79-r2.86]": 1, "[r2.79_6]": 1, "2.87 x 26": 1, "2.84  x 1": 1, "2.82 x 1": 1, "2.84 x1": 1, "2.80 x 1": 1, "2.83 x7": 1, "2.79 x 1": 1, "2.83 x 7": 1, "2.87C x 10": 1, "2.79A x 2": 1, "2.84 x 8": 1, "2.87 x 10": 1, "2.83 x 8": 1, "2.79 X 2": 1, "2.79 x 16": 1, "2.87C x 1": 1, "2.79 x 86": 1, "2.87 x 4": 1}, "by_sanction_type": {"Sanction bar": 649, "Sponsorship cancelled and sanction bar": 385, "Sponsorship cancelled": 329, "Sponsorship Cancelled": 104, "Unsatisfactory - Sponsorship Cancelled": 94, "Sanction Bar": 85, "Sanction bar and infringement notice": 55, "Infringement notice": 47, "Unsatisfactory - Sanction Bar": 30, "Sponsorship cancelled, sanction bar and infringement notice": 27, "Sponsorship Cancelled and Sanction Bar": 12, "Other": 7, "Sanction bar (waived)": 4, "Sponsorship Cancelled and sanction bar": 4, "Bar": 4, "Infringement Notice": 2, "Cancellation + Bar": 2, "Sponsorship Cancelled, sanction bar and infringement notice": 1, "sponsorship cancelled": 1, "Unsatisfactory - Sponsorship cancelled and sanction Bar": 1, "Sponsorship cancelled and infringement notice": 1, "Sanction Bar and infringement notice": 1, "Unsatisfactory - Sanction Bar and infringement notice": 1, "sanction bar (waived)": 1, "Sponsor Ship Cancelled": 1, "Sanction Imposed": 1, "Sponsorship cancelled and sactioned bar": 1}, "prohibited_employers": [{"legal_name": "Eatalian Deli (WA) Pty Ltd", "trading_name": "EATALIAN RISTORANTE", "abn": "68660788885", "state": "WA", "postcode": "6071", "reason": "The person is subject to a migrant worker sanction", "imposed_date": "24-Sep-2025", "end_date": "24-Sep-2030"}], "recent_sanctions": [{"sponsor_name": "GLADESVILLE UNITED SOCCER INCORPORATED", "trading_name": "Gladesville Ryde Magic FC", "abn": "98602966295", "state": "NSW", "postcode": "2113", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79, 2.84, 2.86", "imposed_date": "30-Sep-2026", "imposed_sort": "20260930", "end_date": "30-Sep-2031", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "TROPICANA HOLDINGS PTY LTD", "trading_name": "Tropicana Caffe", "abn": "83689681394", "state": "NSW", "postcode": "2010", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84, 2.87", "imposed_date": "29-Sep-2026", "imposed_sort": "20260929", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "LONGEDGE PTY LTD", "trading_name": "Children First Early Education Lindisfarne", "abn": "26466187509", "state": "TAS", "postcode": "7015", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.86", "imposed_date": "22-Sep-2026", "imposed_sort": "20260922", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "MARALIT PTY LTD", "trading_name": "Kowboy Bar and Grill Blacktown", "abn": "18672134628", "state": "NSW", "postcode": "2148", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84 x 3", "imposed_date": "22-Sep-2026", "imposed_sort": "20260922", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "MOMOZZ HARRIS PARK PTY LTD", "trading_name": "MOMOZZ", "abn": "63637785678", "state": "NSW", "postcode": "2150", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.84 x 2", "imposed_date": "16-Sep-2026", "imposed_sort": "20260916", "end_date": "16-Sep-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "CHARLIES CHICKENS CHATSWOOD PTY LTD", "trading_name": "Charlies Chicken Chatswood", "abn": "35577093484", "state": "NSW", "postcode": "2068", "sanction_imposed": "Sanction bar", "obligations_breached": "2.87 x 4, 2.87C", "imposed_date": "15-Sep-2026", "imposed_sort": "20260915", "end_date": "15-Dec-2026", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "EPSOM INVESTMENT FUND PTY LTD", "trading_name": "Steamatic", "abn": "91154651028", "state": "VIC", "postcode": "3551", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.79 x 6, 2.84, 2.87 x 2", "imposed_date": "09-Sep-2026", "imposed_sort": "20260909", "end_date": "09-Sep-2028", "is_active": true, "infringement_amount": "$158,400"}, {"sponsor_name": "SANGKHAE PTY LTD", "trading_name": "Thai House Helensvale Restaurant", "abn": "17854494212", "state": "QLD", "postcode": "4212", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 3, 2.83", "imposed_date": "08-Sep-2026", "imposed_sort": "20260908", "end_date": "08-Dec-2026", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Ozki Nominees Pty Ltd", "trading_name": "Northern Lawnmower & Chainsaw Specialists", "abn": "76998405049", "state": "WA", "postcode": "6065", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84", "imposed_date": "31-Aug-2026", "imposed_sort": "20260831", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Liz Strempel Pty Ltd", "trading_name": "Strempel Racing", "abn": "77677828027", "state": "WA", "postcode": "6211", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84, 2.86", "imposed_date": "28-Aug-2026", "imposed_sort": "20260828", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "PIO'S (WA) Pty Ltd", "trading_name": "Birraz", "abn": "37626785260", "state": "WA", "postcode": "6016", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84", "imposed_date": "28-Aug-2026", "imposed_sort": "20260828", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Gaurish Pty Ltd", "trading_name": "Indian Chimney Albury", "abn": "79161372354", "state": "NSW", "postcode": "2640", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.78, 2.79 x 4, 2.83, 2.87C", "imposed_date": "27-Aug-2026", "imposed_sort": "20260827", "end_date": "27-Aug-2031", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Amelia Park Holdings Pty Ltd", "trading_name": "Busselton Villas and Caravan Park", "abn": "31068281738", "state": "WA", "postcode": "6280", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84, 2.86", "imposed_date": "26-Aug-2026", "imposed_sort": "20260826", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Ipan Interiors Pty Ltd", "trading_name": "Ipan Interiors Pty Ltd", "abn": "64464588966", "state": "ACT", "postcode": "2609", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.86", "imposed_date": "21-Aug-2026", "imposed_sort": "20260821", "end_date": "21-Apr-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "J S Gharial Pty Ltd", "trading_name": "A2Z Interiors", "abn": "89635817846", "state": "VIC", "postcode": "3076", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.86", "imposed_date": "13-Aug-2026", "imposed_sort": "20260813", "end_date": "30-Jul-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "B B Q Factory Pty Limited", "trading_name": "B B Q Factory Pty Limited", "abn": "12054609657", "state": "NSW", "postcode": "2128", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.79", "imposed_date": "13-Aug-2026", "imposed_sort": "20260813", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "133 Kingston Pty Ltd", "trading_name": "Dockside Kingston Cafe", "abn": "33611936737", "state": "ACT", "postcode": "2604", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.86, 2.87", "imposed_date": "11-Aug-2026", "imposed_sort": "20260811", "end_date": "11-Aug-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "TYGR Group Pty Ltd", "trading_name": "Vanilla Pod Food & Espresso Bar", "abn": "52645763686", "state": "NSW", "postcode": "2650", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 4, 2.83 x 2, 2.87 x 2", "imposed_date": "10-Aug-2026", "imposed_sort": "20260810", "end_date": "10-Aug-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Thai Frenzy Pty Ltd", "trading_name": "Thai Frenzy Pty Ltd", "abn": "43101926729", "state": "QLD", "postcode": "4556", "sanction_imposed": "Sanction bar", "obligations_breached": "2.83, 2.87", "imposed_date": "10-Aug-2026", "imposed_sort": "20260810", "end_date": "10-Aug-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Taxi Stop Pty Ltd*", "trading_name": "Select Automotive Repairers", "abn": "67160853538", "state": "VIC", "postcode": "3058", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.86", "imposed_date": "07-Aug-2026", "imposed_sort": "20260807", "end_date": "07-Feb-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Bayside Traders Pty Ltd*", "trading_name": "Midas Frankston", "abn": "73666016119", "state": "VIC", "postcode": "3199", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.86", "imposed_date": "07-Aug-2026", "imposed_sort": "20260807", "end_date": "07-Aug-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Eurolink Pty Limited", "trading_name": "ILVE Appliances", "abn": "50001473347", "state": "NSW", "postcode": "2040", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84, 2.86", "imposed_date": "07-Aug-2026", "imposed_sort": "20260807", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Floor Gallery ACT Pty Ltd", "trading_name": "InRugs", "abn": "36630175003", "state": "ACT", "postcode": "2609", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.86", "imposed_date": "06-Aug-2026", "imposed_sort": "20260806", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Jadoon Group Pty Ltd*", "trading_name": "A.J. Service Centre", "abn": "31616339078", "state": "VIC", "postcode": "3058", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 17", "imposed_date": "04-Aug-2026", "imposed_sort": "20260804", "end_date": "04-Aug-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "XYHHY Reinforcement Pty Ltd", "trading_name": "XYHHY Reinforcement", "abn": "15673506771", "state": "NSW", "postcode": "2113", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84, 2.86, 2.87", "imposed_date": "30-Jul-2026", "imposed_sort": "20260730", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "The Athena School Limited", "trading_name": "The Athena School", "abn": "34630740886", "state": "NSW", "postcode": "2042", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79", "imposed_date": "30-Jul-2026", "imposed_sort": "20260730", "end_date": "30-Jul-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "J S Gharial Pty Ltd", "trading_name": "A2Z Interiors", "abn": "89 635 817 846", "state": "VIC", "postcode": "3076", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.86", "imposed_date": "30-Jul-2026", "imposed_sort": "20260730", "end_date": "30-Jul-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "ARB Corporation Limited", "trading_name": "ARB", "abn": "31006708756", "state": "VIC", "postcode": "3137", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.86 x 16", "imposed_date": "30-Jul-2026", "imposed_sort": "20260730", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "The Momos Pty Ltd", "trading_name": "The Momos", "abn": "74664686131", "state": "NSW", "postcode": "2077", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.86", "imposed_date": "29-Jul-2026", "imposed_sort": "20260729", "end_date": "29-Jul-2030", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "S & D. D Trading Pty Ltd", "trading_name": "Missing Spoon", "abn": "96165036055", "state": "NSW", "postcode": "2060", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 3, 2.84, 2.86, 2.87 x 3", "imposed_date": "24-Jul-2026", "imposed_sort": "20260724", "end_date": "24-Jul-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Niugini Arabica Pty Limited", "trading_name": "Niugini Arabica", "abn": "80151736668", "state": "ACT", "postcode": "2611", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.86", "imposed_date": "22-Jul-2026", "imposed_sort": "20260722", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "M Kontos & P Kontos", "trading_name": "Paragon Cafe", "abn": "18547411282", "state": "NSW", "postcode": "2580", "sanction_imposed": "Sanction bar", "obligations_breached": "2.86", "imposed_date": "13-Jul-2026", "imposed_sort": "20260713", "end_date": "13-Jan-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Crazy Parts Pty Ltd", "trading_name": "Crazy Parts", "abn": "73633614936", "state": "NSW", "postcode": "2116", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79, 2.86 x 2, 2.87", "imposed_date": "09-Jul-2026", "imposed_sort": "20260709", "end_date": "07-Nov-2029", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Fortune Cloud Tech Pty Ltd", "trading_name": "Fortune Cloud Tech SA", "abn": "35644850297", "state": "VIC", "postcode": "3220", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 18", "imposed_date": "09-Jul-2026", "imposed_sort": "20260709", "end_date": "19-Mar-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Aarbees Pty Ltd.", "trading_name": "Aarbees Australia", "abn": "96653941121", "state": "VIC", "postcode": "3220", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 12", "imposed_date": "09-Jul-2026", "imposed_sort": "20260709", "end_date": "09-Jul-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "The Brindle Whippet Pty Ltd", "trading_name": "The Hatter And The Hare", "abn": "98674567045", "state": "VIC", "postcode": "3153", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.86", "imposed_date": "07-Jul-2026", "imposed_sort": "20260707", "end_date": "07-Jul-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Expert  Care Services Pty Ltd", "trading_name": "Expert Care Services", "abn": "79640879054", "state": "NSW", "postcode": "2747", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 6, 2.82 x 2, 2.83 x 3, 2.86 x 3", "imposed_date": "06-Jul-2026", "imposed_sort": "20260706", "end_date": "06-Jul-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Marchem Automotive Pty Ltd*", "trading_name": "Marchem Automotive Pty Ltd", "abn": "89104146250", "state": "VIC", "postcode": "3012", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 86, 2.86 x 2", "imposed_date": "02-Jul-2026", "imposed_sort": "20260702", "end_date": "02-Jul-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "DELIVERY CENTRIC TECHNOLOGY SERVICES PTY LTD", "trading_name": "Delivery Centric Technology Services Pty Ltd", "abn": "21121762294", "state": "VIC", "postcode": "3008", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.86 x 3", "imposed_date": "16-Jun-2026", "imposed_sort": "20260616", "end_date": "16-Jun-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "THE FIFTH POT PTY LTD", "trading_name": "BALANCE THAI", "abn": "44614796913", "state": "NSW", "postcode": "2092", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 3, 2.82, 2.83, 2.86", "imposed_date": "05-Jun-2026", "imposed_sort": "20260605", "end_date": "05-Jun-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "HAGEN'S OPS PTY LTD", "trading_name": "HAGEN'S ORGANICS", "abn": "83651108913", "state": "VIC", "postcode": "3121", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.79 x 17, 2.84, 2.86", "imposed_date": "05-Jun-2026", "imposed_sort": "20260605", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Hillside Brae Pty Ltd", "trading_name": "Greenhill Aged Care", "abn": "41132458434", "state": "NSW", "postcode": "2525", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.87 x 2", "imposed_date": "03-Jun-2026", "imposed_sort": "20260603", "end_date": "03-Dec-2026", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "YSVK HOSPITALITY PTY LTD", "trading_name": "Swagath Foods", "abn": "92635784655", "state": "NSW", "postcode": "2145", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 12, 2.83", "imposed_date": "02-Jun-2026", "imposed_sort": "20260602", "end_date": "02-Jun-2031", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "NABO'S WOODFIRE PIZZA PTY. LTD.", "trading_name": "CASANOVA TORONTO", "abn": "33629243581", "state": "NSW", "postcode": "2283", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 8, 2.83 x 3, 2.86 x 3, 2.87C x 1", "imposed_date": "08-May-2026", "imposed_sort": "20260508", "end_date": "08-Feb-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "JFF Cafe Sorrento Pty Ltd", "trading_name": "The Vanilla Slice Cafe", "abn": "99618533663", "state": "VIC", "postcode": "3943", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.83", "imposed_date": "08-May-2026", "imposed_sort": "20260508", "end_date": "08-May-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Marrybrown Australia Pty Ltd*", "trading_name": "Marrybrown Australia", "abn": "61659451037", "state": "VIC", "postcode": "3171", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.86", "imposed_date": "05-May-2026", "imposed_sort": "20260505", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Mangat Builders Pty Ltd", "trading_name": "Image Homes Vic", "abn": "20643708945", "state": "VIC", "postcode": "3630", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 16, 2.83, 2.86 x 2", "imposed_date": "28-Apr-2026", "imposed_sort": "20260428", "end_date": "28-Apr-2029", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "CHATKAZZ PTY LTD*", "trading_name": "Chatkazz Harris Park", "abn": "59160330156", "state": "NSW", "postcode": "2150", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 3, 2.86", "imposed_date": "17-Apr-2026", "imposed_sort": "20260417", "end_date": "17-Jan-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Indian Sweets Pty Ltd", "trading_name": "Tripat Indian Sweets", "abn": "31675331389", "state": "WA", "postcode": "6210", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.79 x 8, 2.83", "imposed_date": "17-Apr-2026", "imposed_sort": "20260417", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Task National Pty Ltd", "trading_name": "Task National Group", "abn": "33004405606", "state": "VIC", "postcode": "3047", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 3, 2.83, 2.84", "imposed_date": "01-Apr-2026", "imposed_sort": "20260401", "end_date": "01-Apr-2029", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "AYA CONSTRUCTIONS PTY LTD", "trading_name": "AYA CONSTRUCTIONS PTY LTD", "abn": "12617860189", "state": "NSW", "postcode": "2193", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79, 2.86", "imposed_date": "31-Mar-2026", "imposed_sort": "20260331", "end_date": "01-Jul-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Keyalike Services Pty Ltd", "trading_name": "Keyalike Services Pty Ltd", "abn": "64646729633", "state": "VIC", "postcode": "3161", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.83", "imposed_date": "27-Mar-2026", "imposed_sort": "20260327", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "RALIFAH MEDICAL CENTRE PTY LTD", "trading_name": "RALIFAH MEDICAL CENTRE", "abn": "89676822487", "state": "NSW", "postcode": "2680", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.83, 2.86", "imposed_date": "24-Mar-2026", "imposed_sort": "20260324", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "T&Q INTERIOR SOLUTIONS PTY LTD", "trading_name": "T&Q INTERIOR SOLUTIONS", "abn": "49634918577", "state": "ACT", "postcode": "2611", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79", "imposed_date": "04-Mar-2026", "imposed_sort": "20260304", "end_date": "07-Feb-2030", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "MASALA FOODS PTY. LTD.", "trading_name": "MASALA HUT", "abn": "70649535937", "state": "QLD", "postcode": "4350", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 3, 2.84", "imposed_date": "25-Feb-2026", "imposed_sort": "20260225", "end_date": "25-May-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Brown Boys Geraldton Pty Ltd", "trading_name": "Brown Boys Curry House Geraldton", "abn": "93650702775", "state": "WA", "postcode": "6530", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84 x 2", "imposed_date": "24-Feb-2026", "imposed_sort": "20260224", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "TOWIES AUSTRALIA PTY LTD", "trading_name": "TOWIES AUSTRALIA PTY LTD", "abn": "23657501132", "state": "NSW", "postcode": "2766", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79, 2.84, 2.86", "imposed_date": "23-Feb-2026", "imposed_sort": "20260223", "end_date": "23-Feb-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Port Adelaide Lone Star Pty Ltd", "trading_name": "Lone Star Rib House and Brews", "abn": "29657454254", "state": "SA", "postcode": "5006", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 2, 2.82, 2.83, 2.84, 2.86", "imposed_date": "23-Feb-2026", "imposed_sort": "20260223", "end_date": "23-Jun-2029", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Hany Pty Ltd", "trading_name": "Physio Cure", "abn": "22752536602", "state": "VIC", "postcode": "3184", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 15, 2.83, 2.87 x 2", "imposed_date": "19-Feb-2026", "imposed_sort": "20260219", "end_date": "19-Feb-2031", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "AUSSIE CUSTOM HOMES PTY LTD", "trading_name": "AUSSIE CUSTOM HOMES PTY LTD", "abn": "29628125379", "state": "NSW", "postcode": "2765", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79, 2.84, 2.86, 2.87, 2.87C", "imposed_date": "18-Feb-2026", "imposed_sort": "20260218", "end_date": "18-Feb-2031", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "NAWOC HOLDINGS PTY LTD", "trading_name": "BumperTech South and North", "abn": "79156623335", "state": "QLD", "postcode": "4207", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79, 2.84, 2.87", "imposed_date": "13-Feb-2026", "imposed_sort": "20260213", "end_date": "13-Aug-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "PORTER HOUSE HOSPITALITY GROUP PTY LTD*", "trading_name": "PORTER HOUSE", "abn": "27632676334", "state": "NSW", "postcode": "2630", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 X 2, 2.84 x 3", "imposed_date": "06-Feb-2026", "imposed_sort": "20260206", "end_date": "06-Aug-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "OOI Trading Pty Ltd", "trading_name": "Taste of Malaysia Hobart", "abn": "35650978395", "state": "TAS", "postcode": "7000", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.79 x 27, 2.86", "imposed_date": "06-Feb-2026", "imposed_sort": "20260206", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "JENUINE FOODS GLOBAL PTY LTD", "trading_name": "Wagyu-Ya on Chevron", "abn": "68151462770", "state": "QLD", "postcode": "4215", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.83, 2.84, 2.86", "imposed_date": "03-Feb-2026", "imposed_sort": "20260203", "end_date": "03-Aug-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "T & T Metro Pty Ltd", "trading_name": "Metro Bakery and Cafe", "abn": "33802759739", "state": "SA", "postcode": "5290", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.83", "imposed_date": "02-Feb-2026", "imposed_sort": "20260202", "end_date": "02-May-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "THE TAMWORTH PTY LIMITED", "trading_name": "The Tamworth Hotel", "abn": "33109659382", "state": "NSW", "postcode": "2340", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 2, 2.83 x 4", "imposed_date": "23-Jan-2026", "imposed_sort": "20260123", "end_date": "23-Jul-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "WEST CONCORD AGGREGATE PTY. LTD", "trading_name": "WEST CONCORD AGGREGATE PTY. LTD", "abn": "55060922910", "state": "NSW", "postcode": "2075", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 3, 2.82, 2.83 x 8", "imposed_date": "14-Jan-2026", "imposed_sort": "20260114", "end_date": "14-Jan-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "MICRON ELECTRICAL SERVICES PTY LTD*", "trading_name": "Micron Electric Services", "abn": "88082435470", "state": "NSW", "postcode": "2000", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 2, 2.83", "imposed_date": "08-Jan-2026", "imposed_sort": "20260108", "end_date": "08-Apr-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Smart Vision Construction Pty Ltd", "trading_name": "Smart Vision Construction Pty Ltd", "abn": "41657155407", "state": "VIC", "postcode": "3076", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.86 x 2", "imposed_date": "22-Dec-2025", "imposed_sort": "20251222", "end_date": "22-Dec-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "NS SEAFOOD SUPPLIES PTY LTD", "trading_name": "Northside Seafood Suppliers", "abn": "29517979894", "state": "NSW", "postcode": "2009", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 2, 2.86 x 2", "imposed_date": "19-Dec-2025", "imposed_sort": "20251219", "end_date": "19-Dec-2026", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "JORDANS SEAFOOD PTY LTD", "trading_name": "Jordon's", "abn": "70250705810", "state": "NSW", "postcode": "2000", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.86", "imposed_date": "15-Dec-2025", "imposed_sort": "20251215", "end_date": "30-Jun-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "KSPA GROUP PTY LTD", "trading_name": "Raj's Corner Cooks Hill", "abn": "62667428364", "state": "NSW", "postcode": "2300", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.78, 2.79 x 4, 2.82 x 3, 2.83, 2.86", "imposed_date": "11-Dec-2025", "imposed_sort": "20251211", "end_date": "11-Dec-2030", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "RAJ'S CORNER PTY LTD", "trading_name": "RAJ'S CORNER HAMILTON", "abn": "29158705269", "state": "NSW", "postcode": "2303", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.84 x 2", "imposed_date": "11-Dec-2025", "imposed_sort": "20251211", "end_date": "11-Dec-2030", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "DARBY RAJ PTY LTD", "trading_name": "Darby Raj", "abn": "35158705232", "state": "NSW", "postcode": "2300", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.84 x 2", "imposed_date": "11-Dec-2025", "imposed_sort": "20251211", "end_date": "11-Dec-2030", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "RAJ'S CORNER HAMILTON PTY LTD", "trading_name": "Rajs Corner", "abn": "15669727333", "state": "NSW", "postcode": "2303", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.78, 2.79 x 14, 2.82 x 3, 2.83, 2.86 x 2", "imposed_date": "11-Dec-2025", "imposed_sort": "20251211", "end_date": "11-Dec-2030", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "KSS RESTAURANT GROUP PTY LTD", "trading_name": "RAJ'S CORNER GLENDALE", "abn": "58096372217", "state": "NSW", "postcode": "2285", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.84 x 2", "imposed_date": "11-Dec-2025", "imposed_sort": "20251211", "end_date": "11-Dec-2030", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "SHOW TILE PTY LTD", "trading_name": "TILECLUB", "abn": "17156541641", "state": "NSW", "postcode": "2200", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 2", "imposed_date": "10-Dec-2025", "imposed_sort": "20251210", "end_date": "10-Dec-2026", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "PREETHI INTERNATIONAL PTY LTD", "trading_name": "ONE PENNY BLACK", "abn": "37165787146", "state": "NSW", "postcode": "2300", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 2", "imposed_date": "09-Dec-2025", "imposed_sort": "20251209", "end_date": "09-Dec-2026", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Neupane Pty Ltd", "trading_name": "Cafe Moka", "abn": "75636417108", "state": "WA", "postcode": "6210", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.83, 2.84", "imposed_date": "04-Dec-2025", "imposed_sort": "20251204", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "CAPRICORN ENGINEERING SERVICES PTY LTD", "trading_name": "Capricorn Engineering Services", "abn": "45151251624", "state": "NSW", "postcode": "2164", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79, 2.84, 2.87", "imposed_date": "03-Dec-2025", "imposed_sort": "20251203", "end_date": "03-Dec-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Spirou Seafood and Salad Pty Ltd", "trading_name": "Spirou Seafood and Salad", "abn": "75121756483", "state": "SA", "postcode": "5540", "sanction_imposed": "Sanction bar", "obligations_breached": "2.83", "imposed_date": "28-Nov-2025", "imposed_sort": "20251128", "end_date": "26-Feb-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "AUSTATE ENTERPRISES PTY LTD", "trading_name": "Austate Services", "abn": "99601640206", "state": "NSW", "postcode": "2566", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 2, 2.84 x 8", "imposed_date": "25-Nov-2025", "imposed_sort": "20251125", "end_date": "25-Feb-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "LOS DOS HOMBRES PTY. LTD*", "trading_name": "LOS DOS HOMBRES PTY LTD", "abn": "80612462174", "state": "NSW", "postcode": "2261", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.79, 2.86", "imposed_date": "19-Nov-2025", "imposed_sort": "20251119", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "KINN GREEN HILLS PTY LTD", "trading_name": "Kinn Thai Restaurant", "abn": "64619458105", "state": "NSW", "postcode": "2323", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 2", "imposed_date": "19-Nov-2025", "imposed_sort": "20251119", "end_date": "19-May-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "TLC NURSING AGENCY PTY LTD", "trading_name": "TLC NURSING AGENCY", "abn": "44629211150", "state": "NSW", "postcode": "2131", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 4, 2.86 x 4, 2.87 x 10", "imposed_date": "18-Nov-2025", "imposed_sort": "20251118", "end_date": "20-Jun-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "KOKO AMUSEMENT PTY LTD", "trading_name": "Koko Amusement", "abn": "51639366680", "state": "NSW", "postcode": "2000", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 2, 2.84, 2.86", "imposed_date": "17-Nov-2025", "imposed_sort": "20251117", "end_date": "17-Nov-2026", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "PARAGROVE PTY LTD", "trading_name": "BAKERS DELIGHT TAMWORTH", "abn": "26064008064", "state": "NSW", "postcode": "2340", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 6, 2.82", "imposed_date": "17-Nov-2025", "imposed_sort": "20251117", "end_date": "17-May-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Jammu Breweries Pty Ltd", "trading_name": "Bootleg Brewery", "abn": "99670308479", "state": "WA", "postcode": "6280", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84 x 2", "imposed_date": "11-Nov-2025", "imposed_sort": "20251111", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Slices (Pizza By The Slice) Pty Ltd", "trading_name": "Slices Keilor", "abn": "71989662097", "state": "VIC", "postcode": "3036", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 5, 2.86 x 2", "imposed_date": "10-Nov-2025", "imposed_sort": "20251110", "end_date": "10-Nov-2029", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "M&SA TRADING PTY LTD*", "trading_name": "New River Edge Indian Cuisine", "abn": "89163654617", "state": "NSW", "postcode": "2448", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 2, 2.82 x 2, 2.83 x 4", "imposed_date": "07-Nov-2025", "imposed_sort": "20251107", "end_date": "13-Oct-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Abdullah Corporation Pty Ltd and Cannalonga Corporation Pty Ltd", "trading_name": "Slices (Caroline Springs)", "abn": "55324258122", "state": "VIC", "postcode": "3023", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 25, 2.86 x 2, 2.87", "imposed_date": "06-Nov-2025", "imposed_sort": "20251106", "end_date": "06-Nov-2029", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "DINESH CORPORATION PTY LTD*", "trading_name": "BLUE FLAME INDIAN RESTAURANT", "abn": "66154707696", "state": "NSW", "postcode": "2333", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 2, 2.84, 2.86", "imposed_date": "05-Nov-2025", "imposed_sort": "20251105", "end_date": "05-Nov-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "THE FREEDOM ROOM PTY LTD", "trading_name": "The Freedom Room Pty Ltd", "abn": "51651079695", "state": "QLD", "postcode": "4034", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.83 x 2, 2.86", "imposed_date": "03-Nov-2025", "imposed_sort": "20251103", "end_date": "03-Nov-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "SUNRISE & CO SERVICE PTY LTD", "trading_name": "MASSAGE PHILOSOPHY", "abn": "19663953967", "state": "QLD", "postcode": "4558", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79A x 2", "imposed_date": "29-Oct-2025", "imposed_sort": "20251029", "end_date": "29-Jan-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Star of Siam Thai Restaurant Pty Ltd", "trading_name": "Star of Siam Thai Restaurant", "abn": "84100645029", "state": "TAS", "postcode": "7250", "sanction_imposed": "Sanction bar", "obligations_breached": "2.82", "imposed_date": "17-Oct-2025", "imposed_sort": "20251017", "end_date": "24-Oct-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Thai Thyme Erina Pty Ltd", "trading_name": "Thai Thyme Erina Pty Ltd", "abn": "40658989345", "state": "NSW", "postcode": "2250", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.79 x 8, 2.82 x 3, 2.83, 2.84, 2.86, 2.87C", "imposed_date": "14-Oct-2025", "imposed_sort": "20251014", "end_date": "14-Oct-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "AIRA AUS PTY LTD", "trading_name": "AIRA AUS PTY LTD", "abn": "66654167861", "state": "VIC", "postcode": "3805", "sanction_imposed": "Sponsorship cancelled, sanction bar and infringement notice", "obligations_breached": "2.83 x 2, 2.84 x 2, 2.86 x 2", "imposed_date": "14-Oct-2025", "imposed_sort": "20251014", "end_date": "14-Oct-2030", "is_active": true, "infringement_amount": "$150, 240.00"}, {"sponsor_name": "Sunshine Family Pty Ltd", "trading_name": "Jin's Place", "abn": "29649686877", "state": "NSW", "postcode": "2515", "sanction_imposed": "Sanction bar", "obligations_breached": "2.87", "imposed_date": "07-Oct-2025", "imposed_sort": "20251007", "end_date": "07-Jan-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Australian Academy of Nursing Pty Ltd", "trading_name": "Australian College of Studies Co.", "abn": "63079823199", "state": "NSW", "postcode": "2150", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79, 2.86", "imposed_date": "03-Oct-2025", "imposed_sort": "20251003", "end_date": "03-Oct-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Toro Robatayaki Pty Ltd", "trading_name": "Toro Robata Sushi", "abn": "56628131911", "state": "NSW", "postcode": "2500", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 3", "imposed_date": "02-Oct-2025", "imposed_sort": "20251002", "end_date": "02-Apr-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "NCR Beaumont Pty Ltd*", "trading_name": "Blooming Garden Beaumont", "abn": "42632774406", "state": "NSW", "postcode": "2303", "sanction_imposed": "Sanction bar", "obligations_breached": "2.82, 2.83, 2.86", "imposed_date": "29-Sep-2025", "imposed_sort": "20250929", "end_date": "29-Sep-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Y&H Company Pty Ltd", "trading_name": "Hungry Bird Restaurant", "abn": "22668695430", "state": "TAS", "postcode": "7320", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.86", "imposed_date": "19-Sep-2025", "imposed_sort": "20250919", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "PP&P Investments Pty Ltd*", "trading_name": "Oishii Pokolbin", "abn": "25114198980", "state": "NSW", "postcode": "2325", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79, 2.86", "imposed_date": "17-Sep-2025", "imposed_sort": "20250917", "end_date": "17-Sep-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "OMC Canning Vale Pty Ltd", "trading_name": "Olympic Medical Center Canning Vale", "abn": "20870871205", "state": "WA", "postcode": "6155", "sanction_imposed": "Sanction bar", "obligations_breached": "2.83 x 4, 2.84", "imposed_date": "12-Sep-2025", "imposed_sort": "20250912", "end_date": "12-Dec-2025", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "QACO Pty Ltd", "trading_name": "Qaco Pty Ltd", "abn": "15163267936", "state": "NSW", "postcode": "2148", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 10, 2.82 x 6, 2.83 x 7, 2.84 x 3, 2.86 x 2, 2.87C x 10", "imposed_date": "12-Sep-2025", "imposed_sort": "20250912", "end_date": "12-Sep-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "NRY Investment Pty Ltd", "trading_name": "La Cuchina di Vino", "abn": "15603845950", "state": "NSW", "postcode": "2478", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84", "imposed_date": "02-Sep-2025", "imposed_sort": "20250902", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "THANA GROUP PTY LTD", "trading_name": "Sticky Rice Thai", "abn": "90640013985", "state": "NSW", "postcode": "2293", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 1, 2.86 x 1", "imposed_date": "29-Aug-2025", "imposed_sort": "20250829", "end_date": "14-Dec-2025", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "ZEXPO PTY LTD", "trading_name": "Fusion Asia Glenelg", "abn": "11648808244", "state": "SA", "postcode": "5045", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.83, 2.84 x 2, 2.86", "imposed_date": "27-Aug-2025", "imposed_sort": "20250827", "end_date": "27-Aug-2030", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "M & S Tanner Pty Ltd", "trading_name": "Thai Ginger Express", "abn": "61284585693", "state": "QLD", "postcode": "4509", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79, 2.83 x 2, 2.84, 2.86", "imposed_date": "21-Aug-2025", "imposed_sort": "20250821", "end_date": "20-Aug-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "AB BROTHERS PTY LTD*", "trading_name": "Bakers Delight Lake Haven", "abn": "18604034602", "state": "NSW", "postcode": "2077", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 8, 2.83 x 1", "imposed_date": "15-Aug-2025", "imposed_sort": "20250815", "end_date": "20-May-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "BABA SHRICHAND PTY LTD", "trading_name": "Miss India Restaurant Marsden", "abn": "30637384073", "state": "QLD", "postcode": "4132", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 3, 2.83 x 3", "imposed_date": "15-Aug-2025", "imposed_sort": "20250815", "end_date": "15-Nov-2025", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "KSZ AUTOMOTIVE AND SMASH REPAIRS PTY LTD", "trading_name": "KSZ Motors", "abn": "63655403017", "state": "NSW", "postcode": "2144", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.79 x 2, 2.83, 2.86", "imposed_date": "04-Aug-2025", "imposed_sort": "20250804", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "JL HOLDINGS AUST PTY LTD", "trading_name": "Sushi Edo", "abn": "73661949195", "state": "QLD", "postcode": "4051", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 2, 2.83 x 2, 2.86", "imposed_date": "23-Jul-2025", "imposed_sort": "20250723", "end_date": "23-Jan-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Jetsada Thai Pty Ltd*", "trading_name": "Harbour view Thai Unaderra", "abn": "44609805245", "state": "NSW", "postcode": "2526", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 2, 2.82 x 2, 2.86", "imposed_date": "22-Jul-2025", "imposed_sort": "20250722", "end_date": "22-Jul-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "GREEN CORNER GARDENING PTY LTD", "trading_name": "Green Corner Gardening Pty Ltd", "abn": "36601946141", "state": "NSW", "postcode": "2073", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79, 2.82 x 2, 2.83", "imposed_date": "21-Jul-2025", "imposed_sort": "20250721", "end_date": "07-Sep-2029", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Pablaz Group Pty Ltd*", "trading_name": "SALON 7 HAIR AND BEAUTY", "abn": "4262911993", "state": "VIC", "postcode": "3355", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 5, 2.83, 2.86", "imposed_date": "18-Jul-2025", "imposed_sort": "20250718", "end_date": "17-Jan-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "GENESIS KIAMA PTY LTD", "trading_name": "BY THE SEA KIAMA", "abn": "60658967554", "state": "NSW", "postcode": "2533", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 4, 2.82 x 2, 2.86", "imposed_date": "14-Jul-2025", "imposed_sort": "20250714", "end_date": "14-Jul-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Sedna Automation Pty Ltd", "trading_name": "Sedna Automation Pty Ltd", "abn": "18638104471", "state": "WA", "postcode": "6152", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.84", "imposed_date": "10-Jul-2025", "imposed_sort": "20250710", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "NCDB GROUP PTY LTD", "trading_name": "Dumpling Bar", "abn": "34654016172", "state": "NSW", "postcode": "2304", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79, 2.83, 2.86", "imposed_date": "08-Jul-2025", "imposed_sort": "20250708", "end_date": "08-Jul-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "RIMY MOTELS PTY LTD", "trading_name": "COSTA RICA MOTEL", "abn": "65668154569", "state": "NSW", "postcode": "2431", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79, 2.83, 2.86, 2.87", "imposed_date": "08-Jul-2025", "imposed_sort": "20250708", "end_date": "08-Jul-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "SHRI DHANLAXMI PTY LTD*", "trading_name": "RODNEY MOTOR INN", "abn": "87460294040", "state": "VIC", "postcode": "3629", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.83, 2.86", "imposed_date": "04-Jul-2025", "imposed_sort": "20250704", "end_date": "04-Jul-2027", "is_active": true, "infringement_amount": "$79,200"}, {"sponsor_name": "MS & RS GROUP PTY LTD*", "trading_name": "COURTHOUSE RESTAURANT", "abn": "18647842377", "state": "VIC", "postcode": "3820", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.79 x 9, 2.83, 2.84, 2.86 x 2", "imposed_date": "04-Jul-2025", "imposed_sort": "20250704", "end_date": "02-Jul-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "SAWTELL FOOD CO PTY LTD", "trading_name": "Cafe Treeo Sawtell", "abn": "49615529596", "state": "NSW", "postcode": "2452", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79, 2.82, 2.86", "imposed_date": "30-Jun-2025", "imposed_sort": "20250630", "end_date": "30-Jun-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Lexform Pty Ltd", "trading_name": "Lexform", "abn": "72122352176", "state": "NSW", "postcode": "2199", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.84, 2.86", "imposed_date": "30-Jun-2025", "imposed_sort": "20250630", "end_date": "30-Jun-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "JUST WINES AUSTRALIA PTY LTD", "trading_name": "Just Wines Australia Pty Ltd", "abn": "70156011291", "state": "NSW", "postcode": "2164", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.84, 2.86", "imposed_date": "30-Jun-2025", "imposed_sort": "20250630", "end_date": "30-Sep-2025", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "ZORABAAZ PTY LTD", "trading_name": "SEASIDE SHAHI", "abn": "36666987640", "state": "NSW", "postcode": "2500", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.84", "imposed_date": "30-Jun-2025", "imposed_sort": "20250630", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Lee Massage & Acupuncture Charlestown Pty Ltd*", "trading_name": "Lee Massage & Acupuncture Charlestown", "abn": "20158650090", "state": "NSW", "postcode": "2290", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.78, 2.86", "imposed_date": "24-Jun-2025", "imposed_sort": "20250624", "end_date": "03-Dec-2025", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "WEI & LEONG PTY LTD", "trading_name": "Wok & Grill - Club Windang", "abn": "68180125063", "state": "NSW", "postcode": "2527", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 2, 2.82 x 2, 2.86", "imposed_date": "23-Jun-2025", "imposed_sort": "20250623", "end_date": "07-Nov-2029", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Fateh OZ Pty Ltd*", "trading_name": "Pipeworks Cafe", "abn": "92639454701", "state": "NSW", "postcode": "2444", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79 x 4, 2.82 x 2, 2.83 x7", "imposed_date": "23-Jun-2025", "imposed_sort": "20250623", "end_date": "13-Aug-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "COLOUR CRAFT PTY LTD", "trading_name": "Colour Craft Pty Ltd", "abn": "40605708236", "state": "ACT", "postcode": "2609", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79, 2.82, 2.83, 2.84", "imposed_date": "18-Jun-2025", "imposed_sort": "20250618", "end_date": "18-Jun-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "CARETODANCE PTY LTD", "trading_name": "Caretodance", "abn": "82618260174", "state": "NSW", "postcode": "2039", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.79, 2.87", "imposed_date": "18-Jun-2025", "imposed_sort": "20250618", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Statotech Solutions Pty Ltd", "trading_name": "Statotech Solutions", "abn": "15643790738", "state": "VIC", "postcode": "3220", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.82", "imposed_date": "17-Jun-2025", "imposed_sort": "20250617", "end_date": "17-Jun-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Nickels, Jacinta Emily", "trading_name": "Rejuvenate Physio", "abn": "91798074566", "state": "WA", "postcode": "6112", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.84", "imposed_date": "17-Jun-2025", "imposed_sort": "20250617", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Utility Designs Pty Ltd", "trading_name": "Utility Designs Pty Ltd", "abn": "33648587213", "state": "WA", "postcode": "6005", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.84", "imposed_date": "12-Jun-2025", "imposed_sort": "20250612", "end_date": "06-Dec-2026", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "ZREICON PTY LTD", "trading_name": "ZREICON", "abn": "70647113951", "state": "NSW", "postcode": "2259", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.80", "imposed_date": "06-Jun-2025", "imposed_sort": "20250606", "end_date": "31-Dec-2026", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "CAREER PATH ONE PTY LTD", "trading_name": "Career Path One Pty Ltd", "abn": "66648741682", "state": "NSW", "postcode": "2200", "sanction_imposed": "Sponsorship cancelled and sactioned bar", "obligations_breached": "2.79 x 2, 2.82 x 3, 2.84 x 4, 2.86 x 3", "imposed_date": "04-Jun-2025", "imposed_sort": "20250604", "end_date": "06-Mar-2030", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Olivia Italian Pty Ltd", "trading_name": "Olivia Italian  Pty Ltd", "abn": "36637962451", "state": "QLD", "postcode": "4226", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.84", "imposed_date": "03-Jun-2025", "imposed_sort": "20250603", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "SYDNEY DIRECT FRESH PRODUCE PTY LIMITED", "trading_name": "Sydney Direct Fresh produce", "abn": "40151365007", "state": "NSW", "postcode": "2148", "sanction_imposed": "Sanction Imposed", "obligations_breached": "2.86", "imposed_date": "02-Jun-2025", "imposed_sort": "20250602", "end_date": "01-Feb-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "R.J. Mott Pty Ltd", "trading_name": "Skymirror Gallery", "abn": "20480703854", "state": "VIC", "postcode": "3533", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.83, 2.86", "imposed_date": "22-May-2025", "imposed_sort": "20250522", "end_date": "22-Nov-2025", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "GOTECH SOLUTIONS PTY LTD", "trading_name": "GOSOL", "abn": "65644150943", "state": "NSW", "postcode": "2000", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79, 2.86 x 3", "imposed_date": "20-May-2025", "imposed_sort": "20250520", "end_date": "18-Feb-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Psychological Solutions (Qld) Pty Ltd", "trading_name": "The Health Hub Brisbane East", "abn": "58161515635", "state": "QLD", "postcode": "4178", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.84 x 3, 2.87 x 2", "imposed_date": "19-May-2025", "imposed_sort": "20250519", "end_date": "19-Nov-2026", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Aurora Interactive Pty Ltd", "trading_name": "Aurora Interactive", "abn": "14617430887", "state": "QLD", "postcode": "4211", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.84", "imposed_date": "19-May-2025", "imposed_sort": "20250519", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "TKD World Pty Ltd*", "trading_name": "Taekwondo World", "abn": "13096416743", "state": "NSW", "postcode": "2154", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79, 2.82, 2.87 x 2", "imposed_date": "16-May-2025", "imposed_sort": "20250516", "end_date": "16-May-2028", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "Tincone Pty Ltd", "trading_name": "Tincone", "abn": "95078211346", "state": "QLD", "postcode": "4740", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.82, 2.84", "imposed_date": "14-May-2025", "imposed_sort": "20250514", "end_date": "14-Nov-2025", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Good Time Travel Services Pty Ltd*", "trading_name": "GOODTIME TRAVEL", "abn": "58136181201", "state": "NSW", "postcode": "2220", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.79, 2.86, 2.87", "imposed_date": "13-May-2025", "imposed_sort": "20250513", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "LEADER M PTY LTD*", "trading_name": "Leader M", "abn": "69114574122", "state": "NSW", "postcode": "2143", "sanction_imposed": "Sanction bar", "obligations_breached": "2.79, 2.82, 2.83", "imposed_date": "07-May-2025", "imposed_sort": "20250507", "end_date": "18-Jun-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Mantra Properties Pty Ltd", "trading_name": "The Last Straw Café", "abn": "31905856040", "state": "VIC", "postcode": "3630", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 68", "imposed_date": "07-May-2025", "imposed_sort": "20250507", "end_date": "07-Nov-2025", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "ASTAR PERSONNEL PTY LTD*", "trading_name": "ASTAR Recruitment", "abn": "47117073035", "state": "NSW", "postcode": "2150", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.83, 2.86 x 2", "imposed_date": "02-May-2025", "imposed_sort": "20250502", "end_date": "04-Feb-2027", "is_active": true, "infringement_amount": ""}, {"sponsor_name": "M2 SUSTAINABLE SERVICES PTY LTD", "trading_name": "M2 SUSTAINABLE SERVICES PTY LTD", "abn": "92664471103", "state": "NSW", "postcode": "2193", "sanction_imposed": "Sponsor Ship Cancelled", "obligations_breached": "2.84", "imposed_date": "30-Apr-2025", "imposed_sort": "20250430", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Colab Building Tech Pty Ltd", "trading_name": "Colab Building Tech Pty Ltd", "abn": "38632753765", "state": "VIC", "postcode": "3008", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.83", "imposed_date": "30-Apr-2025", "imposed_sort": "20250430", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Sisters Family Pty.Ltd.", "trading_name": "8 Sisters Cafe and Grill", "abn": "88617496009", "state": "VIC", "postcode": "3550", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.79 x 10", "imposed_date": "17-Apr-2025", "imposed_sort": "20250417", "end_date": "17-Apr-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "JB FIRM PTY LTD", "trading_name": "Yellowstone Building Group", "abn": "19630138546", "state": "QLD", "postcode": "4035", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.84", "imposed_date": "10-Apr-2025", "imposed_sort": "20250410", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "VAV ENTERPRISES PTY LTD", "trading_name": "EQ CAFE AND LOUNGE", "abn": "95627721475", "state": "ACT", "postcode": "2600", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.86", "imposed_date": "10-Apr-2025", "imposed_sort": "20250410", "end_date": "08-Apr-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "HKR WA Pty Ltd", "trading_name": "Ribs Lane", "abn": "17661848013", "state": "WA", "postcode": "6050", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.84 x 2", "imposed_date": "04-Apr-2025", "imposed_sort": "20250404", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "KONA & CO INSURANCE PTY LTD", "trading_name": "Kona Recruitment", "abn": "17642384576", "state": "QLD", "postcode": "4000", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.84 x 2", "imposed_date": "03-Apr-2025", "imposed_sort": "20250403", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Top Shelf Hospitality Pty Ltd", "trading_name": "The Hampden Hotel", "abn": "32637101743", "state": "WA", "postcode": "6009", "sanction_imposed": "Sponsorship Cancelled", "obligations_breached": "2.84 x 3", "imposed_date": "03-Apr-2025", "imposed_sort": "20250403", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Oriental Wok Restaurant Pty Ltd", "trading_name": "Oriental House Chinese Thai Restaurant", "abn": "93603645825", "state": "SA", "postcode": "5070", "sanction_imposed": "Sanction Bar", "obligations_breached": "2.79 x 12, 2.82, 2.83, 2.86", "imposed_date": "02-Apr-2025", "imposed_sort": "20250402", "end_date": "02-Apr-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Tango Electrical Pty Ltd", "trading_name": "Tango Electrical", "abn": "31606749062", "state": "NSW", "postcode": "2034", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84", "imposed_date": "31-Mar-2025", "imposed_sort": "20250331", "end_date": "N/A", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "Baba Deep Singh Transport Pty Ltd", "trading_name": "Attal", "abn": "29164479770", "state": "VIC", "postcode": "3073", "sanction_imposed": "Sponsorship cancelled and sanction bar", "obligations_breached": "2.82, 2.84, 2.86", "imposed_date": "31-Mar-2025", "imposed_sort": "20250331", "end_date": "31-May-2026", "is_active": false, "infringement_amount": ""}, {"sponsor_name": "DEE Contractors Pty Ltd", "trading_name": "DEE Contractors Pty Ltd", "abn": "89168189008", "state": "WA", "postcode": "6108", "sanction_imposed": "Sponsorship cancelled", "obligations_breached": "2.84", "imposed_date": "27-Mar-2025", "imposed_sort": "20250327", "end_date": "N/A", "is_active": false, "infringement_amount": ""}]};

  /* Canonical Australian Date & Public Holiday Utility (ParkCoDates 2026–2027) */
  const ParkCoDates = (function () {
    const NATIONAL_HOLIDAYS = {
      "2026-01-01": "New Year's Day",
      "2026-01-26": "Australia Day",
      "2026-04-03": "Good Friday",
      "2026-04-06": "Easter Monday",
      "2026-12-25": "Christmas Day",
      "2026-12-28": "Boxing Day (Additional Day)",
      "2027-01-01": "New Year's Day",
      "2027-01-26": "Australia Day",
      "2027-03-26": "Good Friday",
      "2027-03-29": "Easter Monday",
      "2027-04-26": "Anzac Day (Observed)",
      "2027-12-27": "Christmas Day (Additional Day)",
      "2027-12-28": "Boxing Day (Additional Day)"
    };
    const STATE_HOLIDAYS = {
      QLD: { "2026-04-04": "Easter Saturday", "2026-04-25": "Anzac Day", "2026-05-04": "Labour Day (QLD)", "2026-10-05": "King's Birthday (QLD)", "2027-05-03": "Labour Day (QLD)", "2027-10-04": "King's Birthday (QLD)" },
      NSW: { "2026-04-25": "Anzac Day", "2026-06-08": "King's Birthday (NSW)", "2026-10-05": "Labour Day (NSW)", "2027-06-14": "King's Birthday (NSW)", "2027-10-04": "Labour Day (NSW)" },
      VIC: { "2026-03-09": "Labour Day (VIC)", "2026-04-25": "Anzac Day", "2026-06-08": "King's Birthday (VIC)", "2026-11-03": "Melbourne Cup Day (VIC)", "2027-03-08": "Labour Day (VIC)", "2027-06-14": "King's Birthday (VIC)", "2027-11-02": "Melbourne Cup Day (VIC)" },
      WA: { "2026-03-02": "Labour Day (WA)", "2026-04-27": "Anzac Day (Observed WA)", "2026-06-01": "Western Australia Day", "2026-09-28": "King's Birthday (WA)", "2027-03-01": "Labour Day (WA)", "2027-06-07": "Western Australia Day", "2027-09-27": "King's Birthday (WA)" },
      SA: { "2026-03-09": "Adelaide Cup Day (SA)", "2026-04-25": "Anzac Day", "2026-06-08": "King's Birthday (SA)", "2026-10-05": "Labour Day (SA)", "2027-03-08": "Adelaide Cup Day (SA)", "2027-06-14": "King's Birthday (SA)", "2027-10-04": "Labour Day (SA)" },
      TAS: { "2026-03-09": "Eight Hours Day (TAS)", "2026-04-25": "Anzac Day", "2026-06-08": "King's Birthday (TAS)", "2027-03-08": "Eight Hours Day (TAS)", "2027-06-14": "King's Birthday (TAS)" },
      ACT: { "2026-03-09": "Canberra Day (ACT)", "2026-04-27": "Anzac Day (Observed ACT)", "2026-06-01": "Reconciliation Day (ACT)", "2026-06-08": "King's Birthday (ACT)", "2026-10-05": "Labour Day (ACT)", "2027-03-08": "Canberra Day (ACT)", "2027-05-31": "Reconciliation Day (ACT)", "2027-06-14": "King's Birthday (ACT)", "2027-10-04": "Labour Day (ACT)" },
      NT: { "2026-05-04": "May Day (NT)", "2026-06-08": "King's Birthday (NT)", "2026-08-03": "Picnic Day (NT)", "2027-05-03": "May Day (NT)", "2027-06-14": "King's Birthday (NT)", "2027-08-02": "Picnic Day (NT)" }
    };
    function pad2(n) { return n < 10 ? "0" + n : String(n); }
    function parseIsoLocal(isoStr) {
      if (!isoStr || typeof isoStr !== "string") return null;
      const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoStr.trim());
      if (!m) return null;
      const y = parseInt(m[1], 10);
      const mo = parseInt(m[2], 10) - 1;
      const dy = parseInt(m[3], 10);
      const d = new Date(y, mo, dy, 12, 0, 0, 0);
      if (d.getFullYear() !== y || d.getMonth() !== mo || d.getDate() !== dy) return null;
      return d;
    }
    function formatIsoLocal(d) {
      if (!d || isNaN(d.getTime())) return "-";
      return d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate());
    }
    function todayBrisbaneIso() {
      try {
        const parts = new Intl.DateTimeFormat("en-CA", {
          timeZone: "Australia/Brisbane",
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        }).formatToParts(new Date());
        const map = {};
        for (let i = 0; i < parts.length; i++) map[parts[i].type] = parts[i].value;
        if (map.year && map.month && map.day) return map.year + "-" + map.month + "-" + map.day;
      } catch (_) {}
      return formatIsoLocal(new Date());
    }
    function getHolidayName(isoStr, stateCode) {
      const st = (stateCode || "QLD").toUpperCase();
      if (NATIONAL_HOLIDAYS[isoStr]) return NATIONAL_HOLIDAYS[isoStr];
      if (STATE_HOLIDAYS[st] && STATE_HOLIDAYS[st][isoStr]) return STATE_HOLIDAYS[st][isoStr];
      return null;
    }
    function isBusinessDay(d, stateCode) {
      const dow = d.getDay();
      if (dow === 0 || dow === 6) return false;
      return !getHolidayName(formatIsoLocal(d), stateCode);
    }
    function addCalendarDays(d, days) {
      return new Date(d.getFullYear(), d.getMonth(), d.getDate() + days, 12, 0, 0, 0);
    }
    function calcWorkingDaysDeadline(startIso, workingDays, stateCode) {
      const start = parseIsoLocal(startIso);
      if (!start) return null;
      const st = (stateCode || "QLD").toUpperCase();
      let cur = new Date(start.getTime());
      let added = 0;
      const skippedHolidays = [];
      while (added < workingDays) {
        cur = addCalendarDays(cur, 1);
        const dow = cur.getDay();
        const iso = formatIsoLocal(cur);
        const hName = getHolidayName(iso, st);
        if (dow !== 0 && dow !== 6) {
          if (hName) skippedHolidays.push({ date: iso, name: hName });
          else added += 1;
        }
      }
      let safe = addCalendarDays(cur, -1);
      while (safe > start && !isBusinessDay(safe, st)) safe = addCalendarDays(safe, -1);
      return { statutoryDate: formatIsoLocal(cur), safeDate: formatIsoLocal(safe), state: st, skippedHolidays: skippedHolidays };
    }
    function calcCalendarDaysDeadline(startIso, calendarDays, stateCode, rolloverToNextBusinessDay) {
      const start = parseIsoLocal(startIso);
      if (!start) return null;
      const st = (stateCode || "QLD").toUpperCase();
      const raw = addCalendarDays(start, calendarDays);
      let finalDate = new Date(raw.getTime());
      let rolledReason = null;
      if (rolloverToNextBusinessDay) {
        const reasons = [];
        while (!isBusinessDay(finalDate, st)) {
          const iso = formatIsoLocal(finalDate);
          const hName = getHolidayName(iso, st);
          const dow = finalDate.getDay();
          if (hName) reasons.push(hName);
          else if (dow === 6) reasons.push("Saturday");
          else if (dow === 0) reasons.push("Sunday");
          finalDate = addCalendarDays(finalDate, 1);
        }
        if (reasons.length > 0) rolledReason = reasons.join(" / ");
      }
      const safe = addCalendarDays(finalDate, -1);
      return { rawDate: formatIsoLocal(raw), statutoryDate: formatIsoLocal(finalDate), safeDate: formatIsoLocal(safe), state: st, rolledReason: rolledReason };
    }
    function diffDaysFromTodayBrisbane(targetIso, customTodayIso) {
      const t = parseIsoLocal(targetIso);
      const now = parseIsoLocal(customTodayIso || todayBrisbaneIso());
      if (!t || !now) return 0;
      return Math.round((t.getTime() - now.getTime()) / 86400000);
    }
    return {
      parseIsoLocal,
      formatIsoLocal,
      addCalendarDays,
      todayBrisbaneIso,
      getHolidayName,
      isBusinessDay,
      calcWorkingDaysDeadline,
      calcCalendarDaysDeadline,
      diffDaysFromTodayBrisbane
    };
  })();

  const STATE = {
    lang: "ko",
    hasInteracted: false,
    roleTab: "all",
    csit: 79423,
    ssit: 146576,
    dama90: 71481,
    fwhit: 190100,
    sources: DEFAULT_SOURCES,
    abf: DEFAULT_ABF_DATA,
    sidData: null
  };

  const PERIOD_THRESHOLDS = {
    "fy26_27": { label: "FY2026–27", csit: 79423, ssit: 146576, dama90: 71481, fwhit: 190100 },
    "fy25_26": { label: "FY2025–26", csit: 76515, ssit: 141210, dama90: 68864, fwhit: 183100 },
    "fy24_25_sid": { label: "FY2024–25 (SID)", csit: 73150, ssit: 135000, dama90: 65835, fwhit: 175000 },
    "fy23_24": { label: "FY2023–24", csit: 70000, ssit: 999999, dama90: 63000, fwhit: 167500 },
    "2013_2023": { label: "2013–Jun 2023", csit: 53900, ssit: 999999, dama90: 48510, fwhit: 162000 }
  };

  const AGE_EX_LABELS = {
    none: { ko: "해당 없음 (일반 만 45세 미만 기준)", en: "None (Standard Under-45 Rule)" },
    dama_50_55: { ko: "DAMA 연령 상한 특례(만 50·55세)", en: "DAMA Age Cap Concession (Under 50 or 55)" },
    fwhit: { ko: "Fair Work 고소득 기준($190,100) 2년 연속 면제 특례", en: "Fair Work High Income Threshold ($190,100 × 2 yrs) Exemption" },
    medical_academic: { ko: "지방 의사·대학 교원(Level B~E) 연령 면제 특례", en: "Regional Medical Practitioner / University Academic Exemption" }
  };

  const AMSR_QUADRANTS = {
    "yes_yes": {
      title_ko: "📋 [AMSR 2×2 매트릭스 · Case A] 동종 호주인 근로자 있음 + 단체협약 / Modern Award 적용 (IMMI 18/033 s 7)",
      title_en: "📋 [AMSR 2×2 Matrix · Case A] Equivalent Australian Worker Present + EA / Modern Award Applies (IMMI 18/033 s 7)",
      items_ko: [
        "적용 Enterprise Agreement 조항 또는 Modern Award(예: Professional Employees Award [MA000065]) 직급 단계 명시",
        "동일 사업장 내 동종 호주 시민권·영주권 근로자의 고용계약서 및 최근 급여명세서(개인정보 가림 처리)",
        "제안 보장기본급(GAE)이 호주인 근로자 연봉(AMSR) 및 노미네이션 접수일 기준 법정 소득 하한 이상임을 입증하는 비교표"
      ],
      items_en: [
        "Specify the Enterprise Agreement clause or Modern Award classification level (e.g. Professional Employees Award [MA000065])",
        "Redacted employment contract and recent payslips of the equivalent Australian worker at the same workplace",
        "Comparison schedule proving offered GAE meets or exceeds both AMSR and the applicable statutory income floor"
      ]
    },
    "yes_no": {
      title_ko: "📋 [AMSR 2×2 매트릭스 · Case B] 동종 호주인 근로자 있음 + 일반 개별 근로계약 (IMMI 18/033 s 7(b))",
      title_en: "📋 [AMSR 2×2 Matrix · Case B] Equivalent Australian Worker Present + Common Law Contract (IMMI 18/033 s 7(b))",
      items_ko: [
        "동일 사업장 내 동종 호주인 근로자의 서명된 고용계약서 사본(개인정보 가림 처리)",
        "해당 호주인 근로자의 최근 2~3회분 급여명세서 또는 STP Payroll Summary",
        "경력이나 책임 범위 차이에 따른 연봉 차등이 있는 경우 객관적 산정 근거 진술서"
      ],
      items_en: [
        "Signed employment contract of the equivalent Australian worker (redacted for privacy)",
        "Recent 2–3 payslips or Single Touch Payroll (STP) summary of that Australian worker",
        "Written justification where seniority or duty scope creates remuneration variance"
      ]
    },
    "no_yes": {
      title_ko: "📋 [AMSR 2×2 매트릭스 · Case C] 동종 호주인 근로자 없음 + 직무에 Modern Award / EA 적용 (IMMI 18/033 s 8)",
      title_en: "📋 [AMSR 2×2 Matrix · Case C] No Equivalent Australian Worker + Modern Award / EA Covers Role (IMMI 18/033 s 8)",
      items_ko: [
        "적용 Modern Award 명칭 및 직급별 최저급 표(Pay Guide) 첨부",
        "외부 시장 연봉 증빙 최소 2종: ① Jobs and Skills Australia 또는 Hays·Robert Half 연봉 가이드, ② 동일 지역 최근 구인광고 2~3건",
        "Award 최저급이 CSIT보다 낮더라도 보장기본급(GAE)은 반드시 CSIT($79,423 또는 DAMA $71,481) 이상으로 체결"
      ],
      items_en: [
        "Applicable Modern Award classification and current Fair Work Pay Guide",
        "At least 2 external market sources: (1) JSA or Hays/Robert Half Salary Guide + (2) 2–3 contemporaneous local job advertisements",
        "Offered GAE must meet or exceed CSIT ($79,423 or DAMA $71,481) even where the Award minimum is lower"
      ]
    },
    "no_no": {
      title_ko: "📋 [AMSR 2×2 매트릭스 · Case D] 동종 호주인 근로자 없음 + Award 미적용 전문·관리직 (IMMI 18/033 s 8(b) 정밀심사 구간)",
      title_en: "📋 [AMSR 2×2 Matrix · Case D] No Equivalent Australian Worker + Award-Free Role (IMMI 18/033 s 8(b) Strict Scrutiny)",
      items_ko: [
        "AMSR 산정 방법론 진술서(직무 범위·근무 도시·요구 경력에 따른 시장 연봉 도출 근거)",
        "공인 보수 조사 보고서(Hays·Robert Half·Mercer 또는 Jobs and Skills Australia 통계) 1~2종",
        "동일 지역·동일 직무의 최근 6개월 내 실제 구인광고(연봉 범위가 명시된 공고) 최소 2~3건"
      ],
      items_en: [
        "Written AMSR Methodology Statement detailing how remuneration was benchmarked for location and skill level",
        "1–2 reputable industry remuneration surveys (Hays, Robert Half, Mercer, or JSA statistics)",
        "2–3 recent local job advertisements explicitly stating salary bands"
      ]
    }
  };

  const I18N = {
    ko: {},
    en: {
      navBrandTitle: "Park & Co · Employer Sponsored",
      navStreams: "Salary & AMSR",
      navTrt: "186/482 Tenure",
      nav8607: "8607 Clock",
      navSaf: "SAF & Nom Fees",
      navAbf: "ABF Sanctions",
      navFaq: "Immi FAQ",
      pollBtnLabel: "14/14 Verified",
      topCta: "Official Inquiry Hub",
      urgentBadge: "FY2026–27 Primary Legislation",
      urgentText: "CSIT $79,423 · SSIT $146,576 · DAMA 90% $71,481 · 494 Nomination $0 (reg 2.73B) · Condition 8607 180d/365d Mobility",
      urgentLink: "s 245AR Cost Recovery Ban ↓",
      heroOverline: "EMPLOYER SPONSORED VISA INTELLIGENCE · SID 482 · ENS 186 · SESR 494",
      heroTitle: "Australia Employer Sponsored Visa (SID 482 · ENS 186 · 494) & CSIT · 8607 Navigator",
      heroLead: "Check FY2026–27 statutory salary thresholds (CSIT/SSIT/AMSR), ENS 186 TRT 730-day multi-sponsor tenure, Condition 8607 180-day mobility deadlines, SAF Levy, and Subclass 494 Nil ($0) Nomination charges by role.",
      roleTabAll: "All Tools",
      roleTabWorker: "Workers (Salary · 186 PR Clock · 8607 Gap)",
      roleTabEmployer: "Employers (Nomination Fee · SAF · ABF Sanctions)",
      btnDemoFill: "Load Sample Data",
      sec1_title: "SID 482 · ENS 186 · SESR 494 Stream & 3-Row Salary (CSIT · AMSR · Award) Checker",
      sec1_desc: "Enter the ANZSCO/OSCA Major Group, Guaranteed Annual Earnings (excluding 12% Super), and Australian Market Salary Rate (AMSR) to verify all three statutory remuneration layers.",
      stream_form_title: "Occupation · Offered Salary · AMSR Simulator",
      sm_mg_label: "1. Occupation Major Group (ANZSCO / OSCA)",
      optMgProf: "Major Groups 1, 2, 4, 5, 6 (Managers, Professionals, Clerical, Community · CSOL)",
      optMgTrades: "Major Group 3 (Technicians & Trades: Chef, Mechanic, Welder, Carpenter · Excl. from SSIT)",
      optMgMach: "Major Groups 7 & 8 (Machinery Operators & Labourers · Excl. from SSIT · DAMA focus)",
      optMgNonCsol: "Non-CSOL High-Income Role (Major Groups 1, 2, 4, 5, 6 outside CSOL)",
      sm_period_label: "1-B. Nomination Lodgement Period (Applicable Floor)",
      optPer2627: "FY2026–27 (Current from 1 Jul 2026 · CSIT $79,423 · SSIT $146,576 · DAMA $71,481)",
      optPer2526: "FY2025–26 (1 Jul 2025–30 Jun 2026 · CSIT $76,515 · SSIT $141,210 · DAMA $68,864)",
      optPer2425: "FY2024–25 (7 Dec 2024–30 Jun 2025 SID Launch · CSIT $73,150 · SSIT $135,000)",
      optPer2324: "FY2023–24 (1 Jul 2023–6 Dec 2024 · Legacy TSMIT $70,000)",
      optPer1323: "2013 – 30 Jun 2023 (Legacy Frozen TSMIT $53,900)",
      sm_sal_label: "2. Offered Guaranteed Annual Earnings (GAE, AUD Excl. Super)",
      sm_sal_hint: "Base guaranteed salary excluding 12% Superannuation and non-guaranteed overtime/bonuses",
      sm_amsr_label: "3. Australian Market Salary Rate (AMSR, AUD)",
      sm_amsr_hint: "Equivalent Australian worker rate or Modern Award / market survey benchmark",
      sm_au_worker_label: "4. Equivalent Australian Worker at Same Workplace?",
      optAuWorkerNo: "No (No Equivalent Australian Worker · Prove via Award / Market Data)",
      optAuWorkerYes: "Yes (Australian Citizen/PR employed in equivalent role at same location)",
      sm_award_label: "5. Enterprise Agreement or Modern Award Coverage",
      optAwardYes: "Yes (Covered by Modern Award / EA, e.g. Professional Employees Award [MA000065])",
      optAwardNo: "No (Award-Free specialist or managerial common law contract)",
      sm_dama_chk: "Regional DAMA employer (13 regions) eligible for the 90% CSIT concession ($71,481)",
      stream_result_title: "Stream Eligibility & 3-Row Salary (CSIT · AMSR · Award) Verdict",
      sec2_title: "ENS 186 TRT 2-Year (730-Day) Multi-Employer & SID 482 1-Year Experience Calculator",
      sec2_desc: "SID 482 requires 1 year (365 FTE days) of relevant experience in the last 5 years. ENS 186 TRT aggregates full-time paid sponsored work across approved 482/457 sponsors to reach 2 years (730 days) within 3 years.",
      trt_form_title: "Tenure · Weekly Hours · Unpaid Leave · Age Exemption",
      trt_mode_label: "1. Target Visa Pathway",
      optMode186Trt: "ENS 186 TRT PR Transition (Target: 730 Days / 2 Yrs Sponsored Full-Time)",
      optMode482Sid: "SID 482 Work Experience (Target: 365 FTE Days / 1 Yr in Last 5 Yrs)",
      optMode186De: "ENS 186 Direct Entry / 494 Experience (Target: 1,095 FTE Days / 3 Yrs + Skills Assessment)",
      trt_age_label: "2. Current Age (Years)",
      trt_m1_label: "3. Employer 1 Tenure (Months)",
      trt_h1_label: "4. Employer 1 Paid Hours per Week",
      trt_h1_hint: "38+ hrs/wk = 100% Full-time (186 TRT requires strict scrutiny if under 38 hrs/wk)",
      trt_m2_label: "5. Employer 2 Tenure (Prior/Subsequent, Months)",
      trt_h2_label: "6. Employer 2 Paid Hours per Week",
      trt_unpaid_label: "7. Total Unpaid Leave Days During Period",
      trt_unpaid_hint: "Unpaid leave is deducted from countable days (paid annual/personal leave counts)",
      trt_age_ex_label: "8. Age 45 Exemption Category",
      optAgeExNone: "None (Standard Under-45 Requirement)",
      optAgeExDama: "DAMA Age Cap Concession (Under 50 or 55)",
      optAgeExFwhit: "Fair Work High Income Threshold ($190,100 × 2 yrs) Exemption",
      optAgeExMed: "Regional Medical Practitioner / University Academic (Level B–E) Exemption",
      trt_result_title: "Countable Days, Part-Time Warning & Age Verdict",
      sec3_title: "Condition 8607 (180 Consecutive / 365 Cumulative Days) Mobility Clock",
      sec3_desc: "Subclass 482/494 holders have up to 180 consecutive days per cessation (capped at 365 cumulative days per visa grant) to lodge a new nomination or visa. Deadlines are checked against current Brisbane time.",
      c8607_form_title: "Sponsor Cessation Date & Current Visa Expiry",
      c8607_cease_label: "1. Last Day with Previous Sponsor (Cessation Date)",
      c8607_exp_label: "2. Current 482/494 Visa Expiry Date",
      c8607_gap_label: "3. Prior Unemployment Gap Days Used on Current Visa",
      c8607_gap_hint: "Total cumulative unemployment cap across the visa period is 365 days.",
      c8607_lic_label: "4. Mandatory Licensing / Registration Occupation?",
      optLicNo: "Standard Occupation (May lawfully work in any role during valid grace period)",
      optLicYes: "Licensed/Registered Occupation (Must hold valid registration to perform regulated work)",
      c8607_result_title: "Conservative Recommended Date · Statutory Expiry & Overdue Check",
      sec4_title: "Employer Nomination Charge · SAF Levy · Applicant VAC Split Calculator",
      sec4_desc: "Select sponsor turnover (<$10M vs ≥$10M), visa stream (including $0 Nil Nomination for Subclass 494 under reg 2.73B and Regional 186 TRT under reg 5.37), and family size.",
      saf_form_title: "Sponsor Turnover · Visa Stream · Family Size",
      saf_visa_label: "1. Target Visa & Nomination Stream",
      optSaf482: "SID Subclass 482 (Temporary 1–4 Yrs · Nomination $330)",
      optSaf186Trt: "ENS Subclass 186 · Standard/Metro TRT (PR · Nomination $540)",
      optSaf186Reg: "ENS Subclass 186 · Regional Australia TRT (PR · $0 Nil Nomination reg 5.37)",
      optSaf186De: "ENS Subclass 186 · Direct Entry (PR · Nomination $540)",
      optSaf494: "SESR Subclass 494 (Regional Provisional 5 Yrs · $0 Nil Nomination reg 2.73B)",
      saf_turnover_label: "2. Sponsor Annual Turnover",
      optTurnSmall: "Under AUD $10M (<$10M Small Business SAF Rate)",
      optTurnLarge: "AUD $10M or More (≥$10M Large Business SAF Rate)",
      saf_years_label: "3. 482 Visa Period Requested (Disabled for 186 / 494)",
      optYr1: "1 Year",
      optYr2: "2 Years",
      optYr3: "3 Years",
      optYr4: "4 Years (Standard Max)",
      saf_years_hint: "482 SAF is charged per year; 186 and 494 (fixed 5-year grant) attract a one-off SAF Levy.",
      saf_sbs_label: "4. New Standard Business Sponsorship (SBS) Required?",
      optSbsYes: "Yes · New SBS Application ($420)",
      optSbsNo: "No · Existing Active SBS Held ($0)",
      saf_adults_label: "5. Accompanying Adult Applicants (18+)",
      optAd0: "0 (Single Applicant)",
      optAd1: "1 Adult (Partner)",
      optAd2: "2 Adults",
      saf_children_label: "6. Accompanying Minor Children (Under 18)",
      optCh0: "0",
      optCh1: "1 Child",
      optCh2: "2 Children",
      optCh3: "3 Children",
      saf_result_title: "Mandatory Employer Charges vs Applicant VAC Breakdown (FY2026–27)",
      abf_title: "ABF Register of Sanctioned Sponsors (s 140K(4)) & Prohibited Employers (s 245AYM)",
      abf_desc: "Search statutory sponsor sanctions and prohibited employer declarations published by the Australian Border Force under Migration Act 1958 ss 140K(4) and 245AYM (CC BY 3.0 AU).",
      abf_notice: "Statutory Public Register Notice: Reflects official ABF registers distinguishing currently active sanction bars from historical expired records. Always cross-check by ABN (Australian Business Number).",
      abf_search_label: "Search Sponsor / Trading Name, ABN, or Postcode",
      abf_state_label: "State/Territory Filter",
      optAbfAllState: "All States/Territories",
      abf_ob_label: "Obligation Breached",
      optAbfObAll: "All Obligations",
      optAbfOb279: "reg 2.79 (Equivalent Terms / AMSR Breach)",
      optAbfOb286: "reg 2.86 (Work Outside Nominated Occupation)",
      optAbfOb284: "reg 2.84 (Failure to Provide Audit Info)",
      optAbfOb282: "reg 2.82 / 2.83 (Record-Keeping Breach)",
      optAbfOb287: "reg 2.87 (Unlawful Cost Recovery · s 245AR)",
      abf_status_label: "Sanction Bar Status",
      optAbfStAll: "All Recent Sanctions (Active + Expired)",
      optAbfStAct: "Active Sanction Bars Only",
      thAbfName: "Sponsor & Trading Name",
      thAbfAbn: "ABN & State",
      thAbfSanction: "Sanction Imposed",
      thAbfOb: "Obligations Breached",
      thAbfDates: "Imposed – End Date",
      thAbfStatus: "Status",
      abfChartsToggle: "View ABF Sanctions by Regulation & s 245AYM Prohibited Employer Details",
      abfChartATitle: "Chart A · ABF Sponsor Sanctions by Migration Regulation Breached",
      abfChartBTitle: "Chart B · Sanctions by State & Active s 245AYM Prohibited Employers",
      briefTitle: "Copy, Print (PDF) & Submit Your Employer Sponsored Assessment Brief",
      briefDesc: "Copy your simulated salary (CSIT/SSIT/AMSR), 186 TRT tenure, Condition 8607 deadline, and SAF Levy figures to attach via our online hub or email (enquiry@parkcolawyers.com).",
      btnBriefCopy: "📋 Copy Diagnostic Summary",
      btnBriefPrint: "🖨️ Print / Save PDF",
      btnBriefEnquire: "💬 Copy Brief & Enquire Online →",
      svcBannerTitle: "Received an Employer Nomination / Visa Refusal or Departmental Notice (s 57 / NOICC)?",
      svcBannerSub: "Chang Min Park (QLS Accredited Specialist in Immigration Law) reviews statutory deadlines, evidentiary gaps, and review merits.",
      svcCard1Title: "⚖️ Nomination & Visa Refusal ART Merit Review (ART Case Review™)",
      svcCard1Body: "Where an employer nomination is refused on financial capacity, AMSR, genuine position, or LMT grounds, assess the merits of lodging an Administrative Review Tribunal (ART) application within the strict 28-day statutory limit.",
      svcCard2Title: "🚨 Urgent Departmental Notice Assessment (Visa Emergency™)",
      svcCard2Body: "Structured legal review for s 57 natural justice invitations, PIC 4020 allegations, Condition 8607 grace-period expiry s 116 NOICCs, and regional s 137Q notices.",
      svcBtnArt: "⚖️ Request ART Refusal Review →",
      svcBtnEmerg: "🚨 Urgent Notice Assessment →",
      svcBtnSol: "🔎 Unified SOL Occupation Search & PR Pathways →",
      acc1Title: "Background Statistics · 6-Stream Comparison Table · Salary & Cost Charts",
      st1Over: "CSIT (CORE SKILLS · 186)",
      st1Sub: "FY26–27 Min Base Salary (Excl. Super)",
      st2Over: "SSIT (SPECIALIST 482)",
      st2Sub: "No Occupation List · Priority",
      st3Over: "DAMA 90% CSIT CONCESSION",
      st3Sub: "10% Concession Across 13 DAMAs",
      st4Over: "494 & REGIONAL 186 TRT NOM",
      st4Sub: "reg 2.73B / reg 5.37 Nil Charge",
      st5Over: "CONDITION 8607 MOBILITY",
      st5Sub: "180d Consecutive · 365d Cumulative",
      st6Over: "SAF LEVY (482/YR · 186/494 ONCE)",
      st6Sub: "Small Business (<$10M) · Large $1.8k/$5k",
      chart1_title: "Chart 1 · TSMIT/CSIT · SSIT · DAMA 90% Salary Threshold Progression (2013 – FY2026–27)",
      chart1_sub: "Indexed annually on 1 July to AWOTE · applies by Nomination Lodgement Date (excludes 12% Superannuation).",
      chart2_title: "Chart 2 · Employer Mandatory Charges (SAF·Nomination) vs Applicant VAC Split (s 245AR)",
      chart2_sub: "Under Migration Act ss 245AR/245AS, Sponsorship ($420), Nomination ($330/$540/494 $0), and SAF Levy cannot be passed on to the worker.",
      chart3_title: "Chart 3 · SID 482 (1 Yr Exp) → 8607 Mobility (180d/365d) → ENS 186 TRT PR (2 Yrs Combined)",
      chart3_sub: "Full-time paid sponsored work across multiple approved 482 sponsors counts toward the 2-year (730-day) 186 TRT requirement.",
      stream_table_title: "6 Employer Sponsored Visa Streams Master Comparison Table (FY2026–27)",
      thStName: "Visa / Stream",
      thStDur: "Term & Nature",
      thStList: "Occupation List",
      thStSal: "Salary Floor & Nom Fee",
      thStExp: "Work Experience",
      thStEng: "English (IELTS)",
      thStAge: "Age Limit",
      specName: "Chang Min Park | Legal Practitioner Director",
      specRole: "QLS Accredited Specialist in Immigration Law · PNC Legal Pty Ltd t/a Park & Co Lawyers",
      specContact: "Official Email:",
      specHubLink: "Official Consultation Hub →",
      acc2Title: "Primary Legislation Sources (SHA-256 Monitor) & Legal Disclaimer",
      sec5_desc: "All figures (CSIT $79,423, SSIT $146,576, SAF Levy, VAC, 494 Nil Nomination reg 2.73B, Condition 8607) are verified against primary Department of Home Affairs and Federal Register of Legislation sources.",
      thPolCat: "Category",
      thPolDoc: "Official Instrument & Link",
      thPolAuth: "Authority",
      thPolTrack: "Tracked Metrics",
      thPolCad: "Cadence",
      thPolStat: "Status",
      discTitle: "Legal Disclaimer & Migration Act s 245AR Cost Recovery Prohibition Notice",
      discP1: "This Employer Sponsored Visa Navigator is published by PNC Legal Pty Ltd t/a Park & Co Lawyers for general informational purposes based on primary Department of Home Affairs and Federal Register of Legislation sources. Results do not constitute formal legal advice.",
      discP2: "Before lodging a sponsorship, nomination, ENS 186 application, or relying on Condition 8607 mobility windows, obtain advice tailored to your circumstances from Chang Min Park (QLS Accredited Specialist in Immigration Law · enquiry@parkcolawyers.com · parklawyers.com.au/links)."
    }
  };

  function fmtAUD(n) {
    return "$" + Math.round(n).toLocaleString("en-AU");
  }

  function renderEmptyPromptHtml() {
    const en = STATE.lang === "en";
    return `
      <div class="pk-empty-prompt">
        <p style="margin:0 0 10px;">${en
          ? "Adjust the inputs on the left or load sample figures to view your statutory assessment."
          : "좌측 입력란에 조건을 선택하시거나 아래 버튼을 누르시면 법령 기준 진단 결과가 표시됩니다."}</p>
        <button type="button" class="btn-secondary pk-demo-trigger" style="font-size:12.5px;padding:7px 14px;">${en ? "Load Sample Data" : "예시 데이터 넣어보기"}</button>
      </div>
    `;
  }

  /* Pure Evaluation Functions (Testable in Node & Browser) */
  function evaluateSalaryAndStream(params) {
    const mg = params.mg || "mgr_prof";
    const periodKey = params.periodKey || "fy26_27";
    const pThresh = PERIOD_THRESHOLDS[periodKey] || PERIOD_THRESHOLDS.fy26_27;
    const salary = Number(params.salary);
    const amsr = Number(params.amsr);
    const auWorker = params.auWorker || "no";
    const awardApplies = params.awardApplies || "yes";
    const isDama = Boolean(params.isDama);

    if (!Number.isFinite(salary) || salary <= 0 || !Number.isFinite(amsr) || amsr <= 0) {
      return {
        valid: false,
        errorKo: "제안 기본급(GAE)과 호주 시장 연봉(AMSR)에 0보다 큰 유효한 금액(AUD)을 입력해 주십시오.",
        errorEn: "Please enter valid positive AUD amounts for both Offered GAE and AMSR."
      };
    }

    const activeCsit = pThresh.csit;
    const activeSsit = pThresh.ssit;
    const activeDama90 = pThresh.dama90;
    const statutoryFloor = isDama ? activeDama90 : activeCsit;
    const requiredOverallFloor = Math.max(amsr, statutoryFloor);

    const csitOk = salary >= activeCsit;
    const ssitOk = salary >= activeSsit && mg !== "trades_3" && mg !== "machinery_lab_78";
    const amsrOk = salary >= amsr;
    const statutoryRowOk = salary >= statutoryFloor;
    const awardGaeOk = salary >= requiredOverallFloor;
    const damaOk = (isDama || (salary >= activeDama90 && salary < activeCsit)) && salary >= activeDama90 && amsrOk;

    const salaryRows = [
      {
        id: "csit_ssit",
        passed: statutoryRowOk,
        labelKo: "1단계 · 법정 최소 소득 기준 (CSIT / SSIT / DAMA 90%)",
        labelEn: "Row 1 · Statutory Income Threshold (CSIT / SSIT / DAMA 90%)",
        valueKo: `${fmtAUD(salary)} vs ${isDama ? `DAMA 90% ${fmtAUD(activeDama90)}` : `CSIT ${fmtAUD(activeCsit)}`} (SSIT ${activeSsit < 900000 ? fmtAUD(activeSsit) : "해당없음"})`,
        valueEn: `${fmtAUD(salary)} vs ${isDama ? `DAMA 90% ${fmtAUD(activeDama90)}` : `CSIT ${fmtAUD(activeCsit)}`} (SSIT ${activeSsit < 900000 ? fmtAUD(activeSsit) : "N/A"})`,
        statusKo: statutoryRowOk ? (ssitOk ? "충족 (SSIT 우선심사 포함)" : "충족") : `미달 (${fmtAUD(statutoryFloor - salary)} 부족)`,
        statusEn: statutoryRowOk ? (ssitOk ? "Met (incl. SSIT)" : "Met") : `Shortfall (${fmtAUD(statutoryFloor - salary)})`
      },
      {
        id: "amsr",
        passed: amsrOk,
        labelKo: "2단계 · 호주 현지 시장 연봉 (AMSR · reg 2.72(15))",
        labelEn: "Row 2 · Australian Market Salary Rate (AMSR · reg 2.72(15))",
        valueKo: `${fmtAUD(salary)} vs 시장연봉(AMSR) ${fmtAUD(amsr)}`,
        valueEn: `${fmtAUD(salary)} vs Market Rate (AMSR) ${fmtAUD(amsr)}`,
        statusKo: amsrOk ? "충족 (AMSR 이상)" : `거절 사유 (${fmtAUD(amsr - salary)} 미달)`,
        statusEn: amsrOk ? "Met (≥ AMSR)" : `Refusal Risk (${fmtAUD(amsr - salary)} below AMSR)`
      },
      {
        id: "award_gae",
        passed: awardGaeOk,
        labelKo: "3단계 · Modern Award 최저급 및 보장연봉(GAE · 슈퍼 12% 별도)",
        labelEn: "Row 3 · Modern Award / EA Floor & Guaranteed Annual Earnings (GAE)",
        valueKo: awardApplies === "yes"
          ? `Modern Award·단체협약 적용 직무 · 순수 보장연봉 최소 ${fmtAUD(requiredOverallFloor)} 이상 계약 필수`
          : `Award 미적용 직무 · 개별 계약서상 보장기본급(GAE) 최소 ${fmtAUD(requiredOverallFloor)} 이상 명시 필수`,
        valueEn: awardApplies === "yes"
          ? `Award/EA covered role · Guaranteed base salary must be ≥ ${fmtAUD(requiredOverallFloor)} (excl. 12% Super)`
          : `Award-free contract · Guaranteed base salary (GAE) must be ≥ ${fmtAUD(requiredOverallFloor)} (excl. 12% Super)`,
        statusKo: awardGaeOk ? "보장연봉 기준 충족" : "보장연봉 상향 필요",
        statusEn: awardGaeOk ? "GAE Floor Met" : "Increase Required"
      }
    ];

    return {
      valid: true,
      pThresh,
      salary,
      amsr,
      auWorker,
      awardApplies,
      isDama,
      activeCsit,
      activeSsit,
      activeDama90,
      requiredOverallFloor,
      amsrOk,
      csitOk,
      ssitOk,
      damaOk,
      mg,
      salaryRows,
      quadrant: AMSR_QUADRANTS[`${auWorker}_${awardApplies}`] || AMSR_QUADRANTS.no_yes
    };
  }

  function evaluateExperienceAndAge(params) {
    const mode = params.mode || "186_trt";
    const age = parseInt(params.age, 10);
    const m1 = Math.max(0, parseFloat(params.m1) || 0);
    const h1 = Math.max(0, parseFloat(params.h1) || 0);
    const m2 = Math.max(0, parseFloat(params.m2) || 0);
    const h2 = Math.max(0, parseFloat(params.h2) || 0);
    const unpaid = Math.max(0, parseInt(params.unpaid, 10) || 0);
    const ageEx = params.ageEx || "none";
    const ageExObj = AGE_EX_LABELS[ageEx] || AGE_EX_LABELS.none;

    if (!Number.isFinite(age) || age < 18 || age > 75) {
      return {
        valid: false,
        errorKo: "신청자 만 나이를 18세~75세 사이로 입력해 주십시오.",
        errorEn: "Please enter a valid applicant age between 18 and 75."
      };
    }

    const targetDays = mode === "482_sid" ? 365 : (mode === "186_trt" ? 730 : 1095);
    const targetLabelKo = mode === "482_sid"
      ? "SID 482 (최근 5년 내 1년 / 365일 FTE)"
      : (mode === "186_trt" ? "ENS 186 TRT (최근 3년 내 스폰서 풀타임 2년 / 730일)" : "ENS 186 Direct Entry / 494 (관련 직무 3년 / 1,095일 FTE)");
    const targetLabelEn = mode === "482_sid"
      ? "SID 482 (1 Yr / 365 FTE Days in Last 5 Yrs)"
      : (mode === "186_trt" ? "ENS 186 TRT (2 Yrs / 730 Sponsored Full-Time Days)" : "ENS 186 Direct Entry / 494 (3 Yrs / 1,095 FTE Days)");

    const ratio1 = Math.min(1, h1 / 38);
    const ratio2 = Math.min(1, h2 / 38);
    const days1 = Math.round(m1 * 30.4375 * ratio1);
    const days2 = Math.round(m2 * 30.4375 * ratio2);
    const netDays = Math.max(0, days1 + days2 - unpaid);
    const remainingDays = Math.max(0, targetDays - netDays);
    const pct = Math.min(100, Math.round((netDays / targetDays) * 100));

    const hasSubFullTime = (m1 > 0 && h1 < 38) || (m2 > 0 && h2 < 38);
    let partTimeWarningKo = null;
    let partTimeWarningEn = null;
    if (hasSubFullTime) {
      if (mode === "186_trt") {
        partTimeWarningKo = "186 TRT는 원칙적으로 주 38시간 풀타임 기준이므로 파트타임 합산 가능 여부를 반드시 별도 확인하십시오 (육아·돌봄·질병 등 법정 예외 또는 노동협정 외 일반 파트타임 근무는 730일 산정에서 배제될 수 있습니다 · reg 5.19).";
        partTimeWarningEn = "Subclass 186 TRT generally requires full-time sponsored employment (38 hrs/wk); verify whether any part-time periods qualify under narrow statutory concessions or labour agreements (reg 5.19).";
      } else {
        partTimeWarningKo = "주 38시간 미만 근무 구간이 포함되어 풀타임 환산(FTE 비례) 일수로 계산되었습니다. 직군별 기술심사 기관의 최소 주당 시간 요건(통상 주 20시간 이상)을 함께 확인하십시오.";
        partTimeWarningEn = "Sub-38 hr/wk periods have been pro-rated to Full-Time Equivalent (FTE) days. Confirm minimum weekly hour rules with the relevant skills assessing authority.";
      }
    }

    let expSummaryKo = "";
    let expSummaryEn = "";
    if (mode === "482_sid") {
      expSummaryKo = remainingDays === 0
        ? "최근 5년 내 관련 직무 유급 경력 1년(365일 FTE · 스폰서 여부 무관 · 파트타임 비례 합산 허용) 요건을 충족했습니다."
        : `최근 5년 내 관련 직무 유급 경력(스폰서 여부 무관 · 파트타임 비례 합산 허용)이 추가로 ${remainingDays}일 더 필요합니다.`;
      expSummaryEn = remainingDays === 0
        ? "Satisfies the 1-year (365 FTE days) relevant paid experience requirement within the last 5 years (sponsored or non-sponsored)."
        : `Requires ${remainingDays} additional FTE days of relevant paid work within the last 5 years (pro-rata part-time permitted).`;
    } else if (mode === "186_de") {
      expSummaryKo = remainingDays === 0
        ? "관련 직무 풀타임 환산 3년(1,095일) 유급 경력 일수를 충족했습니다 (유효한 기술심사 통과 필수)."
        : `관련 직무 풀타임 환산 3년(1,095일) 유급 경력까지 추가로 ${remainingDays}일이 더 필요하며 유효한 기술심사(Skills Assessment)가 필수입니다.`;
      expSummaryEn = remainingDays === 0
        ? "Satisfies the 3-year (1,095 FTE days) relevant skilled experience requirement (valid Skills Assessment mandatory)."
        : `Requires ${remainingDays} additional FTE days toward 3 years (1,095 days) of relevant skilled work plus a positive Skills Assessment.`;
    } else {
      expSummaryKo = remainingDays === 0
        ? "최근 3년 내 승인된 482/457 스폰서 아래 유급 근무 2년(730일) 합산 요건을 충족했습니다."
        : `최근 3년 내 승인된 482/457 스폰서 아래 유급 풀타임 근무(730일 기준)까지 추가로 ${remainingDays}일이 더 필요합니다.`;
      expSummaryEn = remainingDays === 0
        ? "Satisfies the 2-year (730 days) paid sponsored work requirement under approved 482/457 sponsors within the last 3 years."
        : `Requires ${remainingDays} additional days of full-time paid sponsored work under approved 482/457 sponsors.`;
    }

    let ageOk = true;
    let ageLimitTextKo = "만 45세 미만 법정 연령 기준 충족";
    let ageLimitTextEn = "Meets standard under-45 statutory age limit";
    if (mode !== "482_sid") {
      if (age >= 45 && ageEx === "none") {
        ageOk = false;
        ageLimitTextKo = `❌ 만 ${age}세 · 일반 186/494 연령 상한(만 45세 미만) 초과 — DAMA 연령 상한 특례(만 50·55세) 또는 고소득·학계·지방의사 면제 요건을 반드시 검토하십시오.`;
        ageLimitTextEn = `❌ Age ${age} · Exceeds standard under-45 cap for Subclass 186/494 — check eligibility for ${AGE_EX_LABELS.dama_50_55.en} or High-Income/Medical/Academic exemptions.`;
      } else if (age >= 45) {
        if (ageEx === "dama_50_55" && age >= 55) {
          ageOk = false;
          ageLimitTextKo = `❌ 만 ${age}세 · ${ageExObj.ko} 상한(만 55세 미만)도 초과하므로 고소득·지방의사·대학교원 면제 해당 여부를 별도 점검해야 합니다.`;
          ageLimitTextEn = `❌ Age ${age} · Exceeds even the ${ageExObj.en} cap (under 55); check High-Income, Medical, or Academic exemptions.`;
        } else {
          ageLimitTextKo = `✅ 만 ${age}세 · 선택하신 『${ageExObj.ko}』 적용 시 연령 상한 면제 대상입니다.`;
          ageLimitTextEn = `✅ Age ${age} · Eligible under selected exemption: ${ageExObj.en}.`;
        }
      }
    } else {
      ageLimitTextKo = "✅ SID Subclass 482는 신청 시 연령 상한이 없습니다 (단, 향후 186 영주권 전환 시 만 45세 기준 유의).";
      ageLimitTextEn = "✅ SID Subclass 482 has no upper age limit (note the under-45 rule if later transitioning to Subclass 186 PR).";
    }

    return {
      valid: true,
      mode,
      age,
      ageEx,
      ageExLabelKo: ageExObj.ko,
      ageExLabelEn: ageExObj.en,
      targetDays,
      targetLabelKo,
      targetLabelEn,
      days1,
      days2,
      unpaid,
      netDays,
      remainingDays,
      pct,
      hasSubFullTime,
      partTimeWarningKo,
      partTimeWarningEn,
      expSummaryKo,
      expSummaryEn,
      ageOk,
      ageLimitTextKo,
      ageLimitTextEn
    };
  }

  function evaluateCondition8607(params) {
    const ceaseStr = (params.ceaseStr || "").trim();
    const expStr = (params.expStr || "").trim();
    const priorGap = Math.max(0, parseInt(params.priorGap, 10) || 0);
    const licensed = params.licensed || "no";
    const todayIso = params.todayIso || ParkCoDates.todayBrisbaneIso();

    const ceaseDate = ParkCoDates.parseIsoLocal(ceaseStr);
    const expDate = ParkCoDates.parseIsoLocal(expStr);
    if (!ceaseDate || !expDate) {
      return {
        valid: false,
        invalidOrder: false,
        errorKo: "고용 종료일과 비자 만료일을 올바른 날짜 형식(YYYY-MM-DD)으로 입력해 주십시오.",
        errorEn: "Please enter valid YYYY-MM-DD dates for both sponsor cessation and visa expiry."
      };
    }

    if (ceaseDate.getTime() > expDate.getTime()) {
      return {
        valid: false,
        invalidOrder: true,
        errorKo: `입력 오류: 기존 스폰서 고용 종료일(${ceaseStr})이 현재 비자 만료일(${expStr})보다 늦을 수 없습니다. 날짜를 다시 확인해 주십시오.`,
        errorEn: `Validation Error: Sponsor cessation date (${ceaseStr}) cannot be later than current visa expiry date (${expStr}).`
      };
    }

    const remainingCumulative = Math.max(0, 365 - priorGap);
    const allowedWindowDays = Math.min(180, remainingCumulative);
    const rawCalc = ParkCoDates.calcCalendarDaysDeadline(ceaseStr, allowedWindowDays, "QLD", false);
    const rawDeadlineDate = ParkCoDates.parseIsoLocal(rawCalc.statutoryDate);

    const cappedByVisaExpiry = expDate.getTime() < rawDeadlineDate.getTime();
    const effectiveDateObj = cappedByVisaExpiry ? expDate : rawDeadlineDate;
    const statutoryDate = ParkCoDates.formatIsoLocal(effectiveDateObj);

    let safeDateObj = ParkCoDates.addCalendarDays(effectiveDateObj, -1);
    if (safeDateObj.getTime() < ceaseDate.getTime()) safeDateObj = ceaseDate;
    const safeDate = ParkCoDates.formatIsoLocal(safeDateObj);

    const daysRemaining = ParkCoDates.diffDaysFromTodayBrisbane(statutoryDate, todayIso);
    const isExpired = daysRemaining < 0 || allowedWindowDays === 0;
    const isUrgent = !isExpired && daysRemaining <= 14;

    return {
      valid: true,
      ceaseStr,
      expStr,
      todayIso,
      priorGap,
      licensed,
      remainingCumulative,
      allowedWindowDays,
      cappedByVisaExpiry,
      statutoryDate,
      safeDate,
      daysRemaining,
      isExpired,
      isUrgent
    };
  }

  function evaluateSafAndVac(params) {
    const visa = params.visa || "482";
    const turnover = params.turnover || "small";
    const years = Math.max(1, Math.min(4, parseInt(params.years, 10) || 4));
    const needSbs = params.needSbs || "yes";
    const adults = Math.max(0, parseInt(params.adults, 10) || 0);
    const children = Math.max(0, parseInt(params.children, 10) || 0);

    const isYearsDisabled = visa !== "482";
    const sbsFee = (visa === "482" || visa === "494") && needSbs === "yes" ? 420 : 0;

    let nomFee = 540;
    let nomBadgeKo = "$540 (표준 ENS 186 노미네이션 수수료 · reg 5.37)";
    let nomBadgeEn = "$540 (Standard ENS 186 Nomination Charge · reg 5.37)";
    if (visa === "482") {
      nomFee = 330;
      nomBadgeKo = "$330 (SID 482 노미네이션 수수료 · reg 2.73)";
      nomBadgeEn = "$330 (SID 482 Nomination Charge · reg 2.73)";
    } else if (visa === "494") {
      nomFee = 0;
      nomBadgeKo = "$0 (정부 노미네이션 수수료 면제 · reg 2.73B / 단 SAF Levy $3,000·$5,000 별도)";
      nomBadgeEn = "$0 (Nil Government Nomination Charge · reg 2.73B / One-off SAF Levy $3,000·$5,000 applies separately)";
    } else if (visa === "186_trt_regional") {
      nomFee = 0;
      nomBadgeKo = "$0 (지방 Regional 186 TRT 정부 노미네이션 수수료 면제 · reg 5.37 / 단 SAF Levy $3,000·$5,000 별도)";
      nomBadgeEn = "$0 (Nil Nomination Charge for Regional 186 TRT · reg 5.37 / One-off SAF Levy $3,000·$5,000 applies separately)";
    }

    const safLevy = visa === "482"
      ? (turnover === "small" ? 1200 : 1800) * years
      : (turnover === "small" ? 3000 : 5000);
    const employerTotal = sbsFee + nomFee + safLevy;

    const baseVac = visa === "482" ? 4015 : 6140;
    const addAdultVac = (visa === "482" ? 4015 : 3070) * adults;
    const addChildVac = (visa === "482" ? 1005 : 1535) * children;
    const applicantTotal = baseVac + addAdultVac + addChildVac;

    return {
      visa,
      turnover,
      years,
      isYearsDisabled,
      needSbs,
      adults,
      children,
      sbsFee,
      nomFee,
      nomBadgeKo,
      nomBadgeEn,
      safLevy,
      employerTotal,
      baseVac,
      addAdultVac,
      addChildVac,
      applicantTotal,
      combinedTotal: employerTotal + applicantTotal
    };
  }

  /* 1. Render SVG Charts */
  function renderCharts() {
    if (typeof document === "undefined") return;
    const en = STATE.lang === "en";
    const salEl = document.getElementById("svg-salary-progression-chart");
    if (salEl) {
      salEl.innerHTML = `
        <svg viewBox="0 0 680 270" width="100%" style="display:block;height:auto;font-family:'Pretendard Variable','Manrope',sans-serif;">
          <rect x="0" y="0" width="680" height="270" rx="10" fill="#FBF9F5"/>
          <line x1="60" y1="215" x2="645" y2="215" stroke="#E5DFD3" stroke-width="1.5"/>
          <rect x="85" y="142" width="44" height="73" rx="5" fill="#7D756D"/>
          <text x="107" y="135" text-anchor="middle" font-size="11" font-weight="700" fill="#14282A">$53,900</text>
          <text x="107" y="235" text-anchor="middle" font-size="11" font-weight="600" fill="#47433E">2013–2023</text>
          <text x="107" y="250" text-anchor="middle" font-size="9.5" fill="#7D756D">${en ? "Frozen TSMIT" : "10년 동결 TSMIT"}</text>

          <rect x="190" y="120" width="44" height="95" rx="5" fill="#1F5A5E"/>
          <text x="212" y="113" text-anchor="middle" font-size="11" font-weight="700" fill="#1F5A5E">$70,000</text>
          <text x="212" y="235" text-anchor="middle" font-size="11" font-weight="600" fill="#47433E">FY23–24</text>
          <text x="212" y="250" text-anchor="middle" font-size="9.5" fill="#7D756D">1 Jul 2023</text>

          <rect x="295" y="115" width="36" height="100" rx="5" fill="#0E3A3E"/>
          <rect x="335" y="38" width="36" height="177" rx="5" fill="#B68B40"/>
          <text x="313" y="108" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0E3A3E">$73,150</text>
          <text x="353" y="31" text-anchor="middle" font-size="10.5" font-weight="700" fill="#8A6626">$135,000</text>
          <text x="333" y="235" text-anchor="middle" font-size="11" font-weight="600" fill="#47433E">Dec 2024</text>
          <text x="333" y="250" text-anchor="middle" font-size="9.5" fill="#7D756D">${en ? "SID 482 Launch" : "SID 482 출범"}</text>

          <rect x="420" y="110" width="36" height="105" rx="5" fill="#0E3A3E"/>
          <rect x="460" y="30" width="36" height="185" rx="5" fill="#B68B40"/>
          <text x="438" y="103" text-anchor="middle" font-size="10.5" font-weight="700" fill="#0E3A3E">$76,515</text>
          <text x="478" y="23" text-anchor="middle" font-size="10.5" font-weight="700" fill="#8A6626">$141,210</text>
          <text x="458" y="235" text-anchor="middle" font-size="11" font-weight="600" fill="#47433E">FY25–26</text>
          <text x="458" y="250" text-anchor="middle" font-size="9.5" fill="#7D756D">DAMA 90%: $68,864</text>

          <rect x="545" y="104" width="38" height="111" rx="5" fill="#0E3A3E"/>
          <rect x="587" y="22" width="38" height="193" rx="5" fill="#B68B40"/>
          <text x="564" y="96" text-anchor="middle" font-size="11" font-weight="800" fill="#0E3A3E">$79,423</text>
          <text x="606" y="15" text-anchor="middle" font-size="11" font-weight="800" fill="#8A6626">$146,576</text>
          <text x="585" y="235" text-anchor="middle" font-size="11" font-weight="800" fill="#14282A">${en ? "FY26–27 (Current)" : "FY26–27 (현행)"}</text>
          <text x="585" y="250" text-anchor="middle" font-size="9.5" font-weight="700" fill="#2E6B4F">DAMA 90%: $71,481</text>

          <rect x="70" y="14" width="12" height="12" rx="2" fill="#0E3A3E"/>
          <text x="87" y="24" font-size="10.5" font-weight="700" fill="#14282A">CSIT (Core Skills · 186)</text>
          <rect x="235" y="14" width="12" height="12" rx="2" fill="#B68B40"/>
          <text x="252" y="24" font-size="10.5" font-weight="700" fill="#8A6626">SSIT (Specialist Skills)</text>
        </svg>
      `;
    }

    const costEl = document.getElementById("svg-cost-split-chart");
    if (costEl) {
      costEl.innerHTML = `
        <svg viewBox="0 0 680 270" width="100%" style="display:block;height:auto;font-family:'Pretendard Variable','Manrope',sans-serif;">
          <rect x="0" y="0" width="680" height="270" rx="10" fill="#FBF9F5"/>
          <rect x="24" y="22" width="305" height="226" rx="10" fill="#F5EFE6" stroke="#E5DFD3" stroke-width="1.5"/>
          <text x="40" y="48" font-size="12" font-weight="800" fill="#0E3A3E">${en ? "🏢 Mandatory Employer Costs (s 245AR Ban)" : "🏢 고용주 의무 부담 (전가 금지 · s 245AR)"}</text>
          <text x="40" y="72" font-size="10.8" fill="#14282A">1. Standard Business Sponsorship: <tspan font-weight="700">$420</tspan></text>
          <text x="40" y="95" font-size="10.8" fill="#14282A">2. Nomination: <tspan font-weight="700">482 $330 | 186 $540 | 494 $0</tspan></text>
          <text x="40" y="118" font-size="10.8" fill="#14282A">${en ? "3. SAF Levy (< $10M Small Business):" : "3. SAF Levy (매출 $10M 미만 중소기업):"}</text>
          <text x="52" y="138" font-size="10.5" font-weight="700" fill="#0E3A3E">${en ? "• 482: $1,200/yr | 186/494: $3,000 once" : "• 482: 연 $1,200 | 186·494: 일시불 $3,000"}</text>
          <text x="40" y="160" font-size="10.8" fill="#14282A">${en ? "4. SAF Levy (≥ $10M Large Business):" : "4. SAF Levy (매출 $10M 이상 대기업):"}</text>
          <text x="52" y="180" font-size="10.5" font-weight="700" fill="#0E3A3E">${en ? "• 482: $1,800/yr | 186/494: $5,000 once" : "• 482: 연 $1,800 | 186·494: 일시불 $5,000"}</text>
          <rect x="40" y="196" width="273" height="36" rx="6" fill="#FFFFFF" stroke="#E5DFD3"/>
          <text x="176" y="218" text-anchor="middle" font-size="10.2" font-weight="800" fill="#9B2C2C">${en ? "⚠️ Unlawful to recover/deduct from worker (s 245AR)" : "⚠️ 급여 공제·근로자 전가 시 스폰서 취소·과태료"}</text>

          <rect x="351" y="22" width="305" height="226" rx="10" fill="#FFFFFF" stroke="#E5DFD3" stroke-width="1.5"/>
          <text x="367" y="48" font-size="12" font-weight="800" fill="#8A6626">${en ? "👤 Applicant Visa Stage Charges (FY26–27)" : "👤 비자 신청자(근로자) 부담 가능 항목 (FY26–27)"}</text>
          <text x="367" y="74" font-size="10.8" fill="#14282A">${en ? "1. SID 482 Visa Application Charge (VAC):" : "1. SID 482 비자 신청비 (VAC):"}</text>
          <text x="379" y="94" font-size="10.5" font-weight="700" fill="#8A6626">${en ? "• Primary $4,015 | Adult $4,015 | Child $1,005" : "• 주신청자 $4,015 | 성인 $4,015 | 미성년 $1,005"}</text>
          <text x="367" y="118" font-size="10.8" fill="#14282A">${en ? "2. ENS 186 / SESR 494 Visa Charge (VAC):" : "2. ENS 186 / SESR 494 비자 신청비 (VAC):"}</text>
          <text x="379" y="138" font-size="10.5" font-weight="700" fill="#8A6626">${en ? "• Primary $6,140 | Adult $3,070 | Child $1,535" : "• 주신청자 $6,140 | 성인 $3,070 | 미성년 $1,535"}</text>
          <text x="367" y="162" font-size="10.8" fill="#14282A">${en ? "3. Ancillary Visa Stage Costs:" : "3. 부대 비용 (근로자 본인 부담 적법):"}</text>
          <text x="379" y="182" font-size="10.3" fill="#47433E">${en ? "• English, Skills Assessment, Health, Police, Visa Legal Fee" : "• 영어시험·기술심사·신체검사·신원조회·비자 수임료"}</text>
          <rect x="367" y="196" width="273" height="36" rx="6" fill="#E7F3EC"/>
          <text x="503" y="218" text-anchor="middle" font-size="10.2" font-weight="800" fill="#2E6B4F">${en ? "✅ Visa Stage fees may be paid by worker or employer" : "✅ 비자 단계(Visa Stage) 비용은 당사자 자율 합의"}</text>
        </svg>
      `;
    }

    const flowEl = document.getElementById("svg-pathway-flow-chart");
    if (flowEl) {
      flowEl.innerHTML = `
        <svg viewBox="0 0 920 165" width="100%" style="display:block;height:auto;font-family:'Pretendard Variable','Manrope',sans-serif;">
          <rect x="0" y="0" width="920" height="165" rx="10" fill="#0E3A3E"/>
          <rect x="20" y="25" width="200" height="115" rx="8" fill="#154A4F" stroke="#B68B40" stroke-width="1.5"/>
          <text x="120" y="50" text-anchor="middle" font-size="11" font-weight="800" fill="#EED2A4">${en ? "STEP 1 · SID 482 Entry" : "STEP 1 · SID 482 진입요건"}</text>
          <text x="120" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="#FFFFFF">${en ? "1 Yr FTE in Last 5 Yrs" : "최근 5년 내 1년 FTE 경력"}</text>
          <text x="120" y="96" text-anchor="middle" font-size="10.5" fill="#F1EDE6">CSIT $79,423 / SSIT $146,576</text>
          <text x="120" y="116" text-anchor="middle" font-size="10" fill="#D5E3E4">${en ? "IELTS 5.0 (each 5.0) · Up to 4 Yrs" : "IELTS 5.0 (각 5.0) · 최대 4년"}</text>

          <text x="233" y="88" text-anchor="middle" font-size="18" font-weight="800" fill="#EED2A4">→</text>

          <rect x="246" y="25" width="215" height="115" rx="8" fill="#154A4F" stroke="#B68B40" stroke-width="1.5"/>
          <text x="353" y="50" text-anchor="middle" font-size="11" font-weight="800" fill="#EED2A4">${en ? "STEP 2 · Mobility Clock" : "STEP 2 · 스폰서 근무 · 이직 시계"}</text>
          <text x="353" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="#FFFFFF">Condition 8607 (180d/365d)</text>
          <text x="353" y="96" text-anchor="middle" font-size="10.5" fill="#F1EDE6">${en ? "180d consecutive · 365d total gap" : "퇴사 후 연속 180일 · 누적 365일 유예"}</text>
          <text x="353" y="116" text-anchor="middle" font-size="10" fill="#EED2A4">${en ? "Lawful interim work within window" : "유효 유예기간 내 타 고용주 근무 적법"}</text>

          <text x="474" y="88" text-anchor="middle" font-size="18" font-weight="800" fill="#EED2A4">→</text>

          <rect x="488" y="25" width="205" height="115" rx="8" fill="#154A4F" stroke="#9ED3D6" stroke-width="1.5"/>
          <text x="590" y="50" text-anchor="middle" font-size="11" font-weight="800" fill="#9ED3D6">${en ? "STEP 3 · Multi-Sponsor Sum" : "STEP 3 · 다중 스폰서 경력 합산"}</text>
          <text x="590" y="74" text-anchor="middle" font-size="12" font-weight="700" fill="#FFFFFF">${en ? "Reach 2 Yrs (730 Days)" : "풀타임 2년 (730일) 달성"}</text>
          <text x="590" y="96" text-anchor="middle" font-size="10.5" fill="#F1EDE6">${en ? "Sponsor A 15m + Sponsor B 9m OK" : "A스폰서 15개월 + B스폰서 9개월 합산"}</text>
          <text x="590" y="116" text-anchor="middle" font-size="10" fill="#D5E3E4">${en ? "38 hrs/wk full-time basis" : "주 38시간 풀타임 스폰서 근무 기준"}</text>

          <text x="706" y="88" text-anchor="middle" font-size="18" font-weight="800" fill="#EED2A4">→</text>

          <rect x="720" y="25" width="180" height="115" rx="8" fill="#1A4D3A" stroke="#6EE7B7" stroke-width="2"/>
          <text x="810" y="50" text-anchor="middle" font-size="11" font-weight="800" fill="#A7F3D0">${en ? "STEP 4 · PR Transition" : "STEP 4 · 영주권 전환"}</text>
          <text x="810" y="74" text-anchor="middle" font-size="12.5" font-weight="800" fill="#FFFFFF">${en ? "ENS 186 TRT Lodgement" : "ENS 186 TRT 신청"}</text>
          <text x="810" y="96" text-anchor="middle" font-size="10.5" fill="#E7F3EC">${en ? "CSOL List Not Required" : "CSOL 리스트 여부 무관"}</text>
          <text x="810" y="116" text-anchor="middle" font-size="10" fill="#B7DEC8">${en ? "IELTS 6.0 · Under 45 (or Exempt)" : "IELTS 6.0 · 만 45세 미만(특례 제외)"}</text>
        </svg>
      `;
    }
  }

  /* 2. Stream & 3-Row Salary / AMSR Checker */
  function updateStreamChecker() {
    if (typeof document === "undefined") return;
    const out = document.getElementById("stream-checker-result");
    if (!out) return;
    if (!STATE.hasInteracted) {
      out.innerHTML = renderEmptyPromptHtml();
      updateDiagnosticPreview();
      return;
    }

    const en = STATE.lang === "en";
    const res = evaluateSalaryAndStream({
      mg: document.getElementById("sm-major-group")?.value,
      periodKey: document.getElementById("sm-lodgement-period")?.value,
      salary: document.getElementById("sm-offered-salary")?.value,
      amsr: document.getElementById("sm-amsr")?.value,
      auWorker: document.getElementById("sm-au-worker")?.value,
      awardApplies: document.getElementById("sm-award-applies")?.value,
      isDama: document.getElementById("sm-dama-region")?.checked
    });

    if (!res.valid) {
      out.innerHTML = `<div class="alert-box alert-box--danger"><strong>⚠️ ${en ? "Input Validation" : "입력값 확인 필요"}</strong>: ${en ? res.errorEn : res.errorKo}</div>`;
      return;
    }

    const rowsHtml = res.salaryRows.map((r) => `
      <tr>
        <td><strong>${en ? r.labelEn : r.labelKo}</strong></td>
        <td>${en ? r.valueEn : r.valueKo}</td>
        <td><span class="${r.passed ? "badge-ok" : "badge badge-burgundy"}">${r.passed ? "✅ " : "❌ "}${en ? r.statusEn : r.statusKo}</span></td>
      </tr>
    `).join("");

    const badges = [];
    if (!res.amsrOk) {
      badges.push(en
        ? `<div class="alert-box alert-box--danger"><strong>❌ Below Market Salary Rate (AMSR) (${fmtAUD(res.salary)} &lt; AMSR ${fmtAUD(res.amsr)})</strong>: Nomination faces refusal under reg 2.72(15) if offered earnings are below AMSR. Minimum required is <strong>${fmtAUD(res.requiredOverallFloor)}</strong>.</div>`
        : `<div class="alert-box alert-box--danger"><strong>❌ 시장 연봉(AMSR) 미달 (${fmtAUD(res.salary)} &lt; AMSR ${fmtAUD(res.amsr)})</strong>: 제안 연봉이 호주 현지 시장 연봉(AMSR)보다 낮으면 CSIT 충족 여부와 무관하게 노미네이션이 거절됩니다(reg 2.72(15) 및 reg 2.79 위반). 최소 <strong>${fmtAUD(res.requiredOverallFloor)}</strong> 이상이어야 합니다.</div>`);
    } else {
      if (res.ssitOk) {
        badges.push(en
          ? `<div class="alert-box alert-box--success"><strong>✅ SID 482 Specialist Skills Stream Eligible (${fmtAUD(res.salary)} ≥ SSIT ${fmtAUD(res.activeSsit)})</strong>: Eligible without CSOL occupation list restriction and qualifies for ENS 186 TRT PR after 2 years.</div>`
          : `<div class="alert-box alert-box--success"><strong>✅ SID 482 Specialist Skills 스트림 적격 (${fmtAUD(res.salary)} ≥ SSIT ${fmtAUD(res.activeSsit)})</strong>: 직군 리스트(CSOL) 포함 여부와 무관하게 우선심사 트랙 대상이며 2년 후 ENS 186 TRT 영주권 전환이 가능합니다.</div>`);
      }
      if (res.csitOk && (res.mg === "mgr_prof" || res.mg === "trades_3")) {
        badges.push(en
          ? `<div class="alert-box alert-box--success"><strong>✅ SID 482 Core Skills &amp; ENS 186 Salary Met (${fmtAUD(res.salary)} ≥ ${res.pThresh.label} CSIT ${fmtAUD(res.activeCsit)})</strong>: Eligible for 482 Core Skills (1 yr FTE) and 186 Direct Entry (3 yrs FTE + Skills Assessment) where on CSOL (456 occupations).</div>`
          : `<div class="alert-box alert-box--success"><strong>✅ SID 482 Core Skills &amp; ENS 186 연봉 요건 충족 (${fmtAUD(res.salary)} ≥ ${res.pThresh.label} CSIT ${fmtAUD(res.activeCsit)})</strong>: CSOL(456개 직군)에 포함되면 1년 경력으로 482 Core Skills, 3년 경력 및 기술심사로 186 Direct Entry 신청이 가능합니다.</div>`);
      } else if (res.csitOk && (res.mg === "non_csol_high" || res.mg === "machinery_lab_78") && !res.ssitOk) {
        badges.push(en
          ? `<div class="alert-box alert-box--warn"><strong>⚠️ Non-CSOL / Skill Level 4–5 Pathway Check</strong>: Salary meets CSIT (${fmtAUD(res.activeCsit)}). Where the occupation is outside CSOL, check our <a href="https://changa9090.github.io/parkco-dama-navigator/"><strong>DAMA 13-Region Navigator (2,474 Occupations) →</strong></a> or Specialist Skills (${fmtAUD(res.activeSsit)}).</div>`
          : `<div class="alert-box alert-box--warn"><strong>⚠️ CSOL 미포함 / Skill Level 4–5 직군 대체 경로 점검</strong>: 연봉은 CSIT(${fmtAUD(res.activeCsit)}) 이상이나 직군이 CSOL 외에 해당하는 경우 <a href="https://changa9090.github.io/parkco-dama-navigator/"><strong>DAMA 13개 지역 협정 네비게이터(2,474개 직군) →</strong></a> 또는 SSIT(${fmtAUD(res.activeSsit)}) 요건을 검토하십시오.</div>`);
      }
      if (res.damaOk) {
        badges.push(en
          ? `<div class="alert-box alert-box--success"><strong>✅ DAMA 90% CSIT Concession (${fmtAUD(res.activeDama90)}) Eligible</strong>: Qualifies under regional DAMA salary concessions. <a href="https://changa9090.github.io/parkco-dama-navigator/"><strong>Search 13 DAMA occupation lists →</strong></a></div>`
          : `<div class="alert-box alert-box--success"><strong>✅ DAMA CSIT 90% 감면 특례 (${fmtAUD(res.activeDama90)}) 적격 구간</strong>: 일반 CSIT(${fmtAUD(res.activeCsit)}) 미만 구간이라도 지정지역 DAMA 협정을 통한 스폰서십 및 186 영주권 전환 설계가 가능합니다. <a href="https://changa9090.github.io/parkco-dama-navigator/"><strong>13개 DAMA 협정 직군 검색하기 →</strong></a></div>`);
      }
      if (!res.csitOk && !res.damaOk) {
        badges.push(en
          ? `<div class="alert-box alert-box--danger"><strong>❌ Below Minimum CSIT (${fmtAUD(res.activeCsit)})</strong>: Offered salary (${fmtAUD(res.salary)}) is <strong>${fmtAUD(res.activeCsit - res.salary)}</strong> short of standard CSIT (or requires ≥${fmtAUD(res.activeDama90)} under a regional DAMA 90% concession).</div>`
          : `<div class="alert-box alert-box--danger"><strong>❌ 최소 연봉 기준(${fmtAUD(res.activeCsit)}) 미달</strong>: 현재 제안 연봉(${fmtAUD(res.salary)})이 법정 하한선보다 <strong>${fmtAUD(res.activeCsit - res.salary)}</strong> 부족합니다 (지방 DAMA 90% 특례 적용 시에도 최소 ${fmtAUD(res.activeDama90)} 이상 필요).</div>`);
      }
    }

    const qList = (en ? res.quadrant.items_en : res.quadrant.items_ko).map((item) => `<li>${item}</li>`).join("");

    out.innerHTML = `
      <div class="table-wrap" style="margin-bottom:0.85rem;">
        <table class="data-table" style="margin:0;font-size:12.5px;">
          <thead>
            <tr>
              <th>${en ? "Statutory Check Layer" : "3단계 연봉 심사 항목"}</th>
              <th>${en ? "Benchmark Comparison" : "기준 대조"}</th>
              <th>${en ? "Verdict" : "판정"}</th>
            </tr>
          </thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </div>
      <div style="display:flex;flex-direction:column;gap:0.65rem;">
        ${badges.join("")}
        <div class="alert-box" style="background:#FBF9F5;border:1px solid #E5DFD3;color:#14282A;">
          <div style="font-weight:800;color:#0E3A3E;margin-bottom:6px;">${en ? res.quadrant.title_en : res.quadrant.title_ko}</div>
          <ul style="margin:0;padding-left:18px;font-size:12.8px;line-height:1.55;">${qList}</ul>
        </div>
      </div>
    `;
    updateDiagnosticPreview();
  }

  /* 3. ENS 186 TRT 2-Year (730-Day) & SID 482 1-Year Calculator */
  function updateTrtCalculator() {
    if (typeof document === "undefined") return;
    const out = document.getElementById("trt-calc-result");
    if (!out) return;
    if (!STATE.hasInteracted) {
      out.innerHTML = renderEmptyPromptHtml();
      return;
    }

    const en = STATE.lang === "en";
    const res = evaluateExperienceAndAge({
      mode: document.getElementById("trt-target-mode")?.value,
      age: document.getElementById("trt-applicant-age")?.value,
      m1: document.getElementById("trt-emp1-months")?.value,
      h1: document.getElementById("trt-emp1-hours")?.value,
      m2: document.getElementById("trt-emp2-months")?.value,
      h2: document.getElementById("trt-emp2-hours")?.value,
      unpaid: document.getElementById("trt-unpaid-days")?.value,
      ageEx: document.getElementById("trt-age-exemption")?.value
    });

    if (!res.valid) {
      out.innerHTML = `<div class="alert-box alert-box--danger"><strong>⚠️ ${en ? "Input Validation" : "입력값 확인 필요"}</strong>: ${en ? res.errorEn : res.errorKo}</div>`;
      return;
    }

    const ptHtml = res.partTimeWarningKo ? `
      <div class="alert-box ${res.mode === "186_trt" ? "alert-box--danger" : "alert-box--warn"}" style="margin-top:0.65rem;">
        <strong>⚠️ ${en ? "Weekly Working Hours Caution" : "주당 근무시간(파트타임) 주의"}</strong>: ${en ? res.partTimeWarningEn : res.partTimeWarningKo}
      </div>
    ` : "";

    out.innerHTML = `
      <div class="result-summary-grid">
        <div class="mini-kpi"><span>${en ? "Countable Net Days" : "인정 경력 일수 (무급휴직 차감 후)"}</span><strong>${res.netDays.toLocaleString()}${en ? "d" : "일"} / ${res.targetDays.toLocaleString()}${en ? "d" : "일"} (${res.pct}%)</strong></div>
        <div class="mini-kpi"><span>${en ? "Employer 1 + Employer 2" : "제1 직장 + 제2 직장 환산"}</span><strong>${res.days1}${en ? "d" : "일"} + ${res.days2}${en ? "d" : "일"} (−${res.unpaid}${en ? "d" : "일"})</strong></div>
        <div class="mini-kpi"><span>${en ? "Remaining to Target" : "목표 달성까지 잔여 일수"}</span><strong>${res.remainingDays === 0 ? (en ? "Target Met ✅" : "경력 충족 ✅") : (en ? `${res.remainingDays}d (~${(res.remainingDays / 30.4).toFixed(1)}m)` : `${res.remainingDays}일 (약 ${(res.remainingDays / 30.4).toFixed(1)}개월)`)}</strong></div>
      </div>
      <div class="progress-track">
        <div class="progress-fill" style="width:${res.pct}%;"></div>
      </div>
      <div class="alert-box ${res.remainingDays === 0 && res.ageOk ? "alert-box--success" : "alert-box--warn"}">
        <p style="margin:0 0 0.4rem;"><strong>[${en ? res.targetLabelEn : res.targetLabelKo}]</strong>: ${en ? res.expSummaryEn : res.expSummaryKo}</p>
        <p style="margin:0;"><strong>[${en ? "Age Requirement" : "연령 요건"}]</strong>: ${en ? res.ageLimitTextEn : res.ageLimitTextKo}</p>
      </div>
      ${ptHtml}
    `;
    updateDiagnosticPreview();
  }

  /* 4. Condition 8607 (180 / 365-Day) Clock */
  function updateCondition8607() {
    if (typeof document === "undefined") return;
    const out = document.getElementById("c8607-calc-result");
    if (!out) return;
    if (!STATE.hasInteracted) {
      out.innerHTML = renderEmptyPromptHtml();
      return;
    }

    const en = STATE.lang === "en";
    const res = evaluateCondition8607({
      ceaseStr: document.getElementById("c8607-cessation-date")?.value,
      expStr: document.getElementById("c8607-visa-expiry")?.value,
      priorGap: document.getElementById("c8607-prior-gap-days")?.value,
      licensed: document.getElementById("c8607-licensed-occ")?.value
    });

    if (!res.valid) {
      out.innerHTML = `<div class="alert-box alert-box--danger"><strong>🚨 ${en ? "Date Validation Error" : "날짜 입력 오류"}</strong>: ${en ? res.errorEn : res.errorKo}</div>`;
      return;
    }

    const dualCardsHtml = `
      <div class="pk-deadline-pair">
        <div class="pk-deadline-card pk-deadline-card--safe">
          <span class="pk-deadline-card__eyebrow">${en ? "Conservative Safe Lodgement Date (-1d)" : "보수적 안전 노미네이션 접수 권고일 (1일 전)"}</span>
          <div class="pk-deadline-card__date">${res.safeDate}</div>
          <div class="pk-deadline-card__note">${en ? `Recommended buffer before ${res.allowedWindowDays}-day cap` : `전산 지연 대비 최소 1일 전 접수 권고 (허용 유예 최대 ${res.allowedWindowDays}일)`}</div>
        </div>
        <div class="pk-deadline-card pk-deadline-card--statutory">
          <span class="pk-deadline-card__eyebrow">${en ? "Condition 8607 Final Grace Expiry" : "Condition 8607 법정 최종 유예 만료일"}</span>
          <div class="pk-deadline-card__date">${res.statutoryDate}</div>
          <div class="pk-deadline-card__note">${res.cappedByVisaExpiry
            ? (en ? `Capped by earlier visa expiry (${res.expStr})` : `현재 비자 만료일(${res.expStr}) 도래로 조기 마감`)
            : (en ? `Remaining cumulative cap: ${res.remainingCumulative}d of 365d` : `비자 기간 잔여 누적 한도: 365일 중 ${res.remainingCumulative}일`)}</div>
        </div>
      </div>
    `;

    let statusAlertHtml = "";
    if (res.isExpired) {
      const overdueDays = Math.abs(res.daysRemaining);
      statusAlertHtml = `
        <div class="alert-box alert-box--danger" style="margin-top:0.85rem;">
          <p style="margin:0 0 0.45rem;"><strong>🚨 ${en
            ? `180-Day Mobility Grace Period Expired (${overdueDays}d Overdue as of ${res.todayIso}) — Visa Cancellation Risk, Seek Urgent Specialist Review`
            : `180일 유예 기한 경과 (브리즈번 기준일 ${res.todayIso} 현재 ${overdueDays}일 초과) — 비자 취소 위험, 즉시 전문가 점검 필요`}</strong></p>
          <p style="margin:0;font-size:0.88rem;">${en
            ? `Your Condition 8607/8608 grace window ended on <strong>${res.statutoryDate}</strong>. Exceeding 180 consecutive days (or 365 cumulative days) without a new sponsor nomination or substantive visa application triggers discretionary cancellation risk under <strong>s 116(1)(b)</strong>. Check immediate options via our <a href="https://changa9090.github.io/parkco-visa-crisis-navigator/"><strong>Visa Crisis &amp; NOICC Navigator →</strong></a> or contact <strong>enquiry@parkcolawyers.com</strong>.`
            : `고용 종료일(<strong>${res.ceaseStr}</strong>) 기준 법정 유예 만료일(<strong>${res.statutoryDate}</strong>)이 이미 경과했습니다. 새 고용주 노미네이션 또는 대체 비자 접수 없이 유예 일수를 초과한 경우 <strong>Migration Act s 116(1)(b)</strong>에 따른 비자 취소 예고통지(NOICC) 발부 위험이 높으므로 즉시 <a href="https://changa9090.github.io/parkco-visa-crisis-navigator/"><strong>박앤코 비자 취소·NOICC 위기 네비게이터 →</strong></a>에서 대응 절차를 확인하시고 <strong>enquiry@parkcolawyers.com</strong>으로 긴급 점검을 요청하십시오.`}</p>
        </div>
      `;
    } else if (res.isUrgent) {
      statusAlertHtml = `
        <div class="alert-box alert-box--warn" style="margin-top:0.85rem;">
          <p style="margin:0 0 0.4rem;"><strong>⚠️ ${en
            ? `Imminent Condition 8607 Deadline (D-${res.daysRemaining} Days Remaining as of ${res.todayIso})`
            : `Condition 8607 유예 만료 임박 (브리즈번 현재 D-${res.daysRemaining}일 남음)`}</strong></p>
          <p style="margin:0;font-size:0.88rem;">${en
            ? `Lodge the new employer's Nomination (including LMT compliance) or an alternative visa by <strong>${res.safeDate}</strong> (final statutory date <strong>${res.statutoryDate}</strong>).`
            : `노동시장 테스트(LMT) 기간을 고려해 보수적 권고일(<strong>${res.safeDate}</strong> · 최종 만료일 <strong>${res.statutoryDate}</strong>) 전까지 새 스폰서 노미네이션 또는 대체 비자 접수를 완료하십시오.`}</p>
        </div>
      `;
    } else {
      statusAlertHtml = `
        <div class="alert-box alert-box--success" style="margin-top:0.85rem;">
          <p style="margin:0 0 0.4rem;"><strong>✅ ${en
            ? `Active Condition 8607 Mobility Window (D-${res.daysRemaining} Days Remaining)`
            : `유효 유예 기간 내 합법 체류·근무 구간 (현재 D-${res.daysRemaining}일 남음)`}</strong></p>
          <p style="margin:0;font-size:0.88rem;">${en
            ? `Until <strong>${res.statutoryDate}</strong>, you may secure a new sponsor nomination or apply for another visa. ${res.licensed === "yes" ? "Because your occupation requires mandatory registration/licensing, you must hold valid registration during any interim work." : "During this valid transition period, you may lawfully work for other employers (non-sponsored gap work does not count toward the 730-day 186 TRT clock)."}`
            : `법정 만료일(<strong>${res.statutoryDate}</strong>) 전까지 새 고용주 노미네이션을 접수하거나 타 비자를 신청하면 비자 조건이 유지됩니다. ${res.licensed === "yes" ? "귀하는 <strong>면허·등록 필수 직군</strong>이므로 공백기 근무 시에도 유효한 면허를 반드시 유지해야 합니다." : "이 유효 유예 기간 중에는 다른 고용주 아래에서 합법적으로 근무할 수 있습니다 (단, 스폰서 외 근무 기간은 186 TRT 730일 시계에 합산되지 않습니다)."}`}</p>
        </div>
      `;
    }

    out.innerHTML = dualCardsHtml + statusAlertHtml;
    updateDiagnosticPreview();
  }

  /* 5. SAF Levy, Nomination ($0 Nil for 494 & Reg 186 TRT) & VAC Calculator */
  function updateSafCalculator() {
    if (typeof document === "undefined") return;
    const visaSel = document.getElementById("saf-visa-type");
    const yearsSel = document.getElementById("saf-years");
    const yearsHint = document.getElementById("saf-years-hint");
    const visaVal = visaSel?.value || "482";
    const en = STATE.lang === "en";

    if (yearsSel) {
      yearsSel.disabled = visaVal !== "482";
    }
    if (yearsHint) {
      if (visaVal === "494") {
        yearsHint.textContent = en
          ? "Subclass 494 has a fixed 5-year grant period with a one-off SAF Levy ($3,000 / $5,000) and $0 Nil Nomination fee (reg 2.73B)."
          : "494 비자는 5년 고정 승인 기간으로 연도 선택이 비활성화되며 일시불 SAF Levy($3,000/$5,000) 및 노미네이션 $0(reg 2.73B)이 적용됩니다.";
      } else if (visaVal !== "482") {
        yearsHint.textContent = en
          ? "Subclass 186 Permanent Residency attracts a one-off SAF Levy ($3,000 / $5,000); year selection applies only to 482."
          : "186 영주권은 일시불 SAF Levy($3,000/$5,000)가 부과되므로 482 요청 기간 선택이 비활성화됩니다.";
      } else {
        yearsHint.textContent = en
          ? "SID 482 SAF Levy is calculated per requested visa year (1–4 years)."
          : "SID 482는 요청 체류 기간(1~4년)에 비례해 연 단위 SAF Levy가 부과됩니다.";
      }
    }

    const out = document.getElementById("saf-cost-result");
    if (!out) return;
    if (!STATE.hasInteracted) {
      out.innerHTML = renderEmptyPromptHtml();
      return;
    }

    const res = evaluateSafAndVac({
      visa: visaVal,
      turnover: document.getElementById("saf-turnover")?.value,
      years: yearsSel?.value,
      needSbs: document.getElementById("saf-need-sbs")?.value,
      adults: document.getElementById("saf-adults")?.value,
      children: document.getElementById("saf-children")?.value
    });

    const nilHighlight = res.nomFee === 0
      ? `<div class="alert-box alert-box--success" style="margin-top:0.8rem;font-size:12.8px;">
          <strong>✅ ${en ? "Statutory Nil ($0) Government Nomination Charge Applied" : "법정 정부 노미네이션 수수료 면제 ($0 · Nil) 적용"}</strong>:<br/>
          ${en ? res.nomBadgeEn : res.nomBadgeKo}
        </div>`
      : `<div class="alert-box" style="margin-top:0.8rem;background:#FBF9F5;border:1px solid #E5DFD3;font-size:12.5px;color:#14282A;">
          <strong>📋 ${en ? "Nomination Charge & s 245AR Rule" : "정부 노미네이션 수수료 및 s 245AR 원칙"}</strong>: ${en ? res.nomBadgeEn : res.nomBadgeKo}
        </div>`;

    out.innerHTML = `
      <div class="result-summary-grid">
        <div class="mini-kpi" style="border-top:3px solid #0E3A3E;">
          <span>🏢 ${en ? "Employer Mandatory Total (s 245AR)" : "고용주 의무 부담 합계 (s 245AR)"}</span>
          <strong>${fmtAUD(res.employerTotal)}</strong>
          <small>SBS ${fmtAUD(res.sbsFee)} + Nom ${fmtAUD(res.nomFee)} + SAF ${fmtAUD(res.safLevy)}</small>
        </div>
        <div class="mini-kpi" style="border-top:3px solid #B68B40;">
          <span>👤 ${en ? "Applicant Family VAC (FY26–27)" : "신청자 가족 비자비 (FY26–27 VAC)"}</span>
          <strong style="color:#8A6626;">${fmtAUD(res.applicantTotal)}</strong>
          <small>${en ? `Primary ${fmtAUD(res.baseVac)} + Adults ${fmtAUD(res.addAdultVac)} + Children ${fmtAUD(res.addChildVac)}` : `주신청 ${fmtAUD(res.baseVac)} + 성인 ${fmtAUD(res.addAdultVac)} + 자녀 ${fmtAUD(res.addChildVac)}`}</small>
        </div>
        <div class="mini-kpi" style="border-top:3px solid #2E6B4F;">
          <span>${en ? "Combined Government Charges" : "정부 납부 총합계 (고용주+신청자)"}</span>
          <strong style="color:#2E6B4F;">${fmtAUD(res.combinedTotal)}</strong>
          <small>${en ? "FY2026–27 Primary Legislation" : "FY2026–27 1차 법령 기준"}</small>
        </div>
      </div>
      ${nilHighlight}
    `;
    updateDiagnosticPreview();
  }

  /* 6. 1-Click Diagnostic Summary & Email Pre-fill */
  function updateDiagnosticPreview() {
    if (typeof document === "undefined") return;
    const en = STATE.lang === "en";
    const previewEl = document.getElementById("sid-diagnostic-preview");
    const emailBtn = document.getElementById("btn-sid-email");
    if (!previewEl) return;

    if (!STATE.hasInteracted) {
      previewEl.textContent = en
        ? "Adjust any calculator above or click [Load Sample Data] to generate your structured Park & Co Employer Sponsored diagnostic brief."
        : "위 계산기에 조건을 입력하시거나 [예시 데이터 넣어보기] 버튼을 누르시면 맞춤형 고용주 스폰서 진단 요약서가 생성됩니다.";
      return;
    }

    const salary = document.getElementById("sm-offered-salary")?.value || "82000";
    const amsr = document.getElementById("sm-amsr")?.value || "80000";
    const trtMode = document.getElementById("trt-target-mode")?.selectedOptions?.[0]?.text || "ENS 186 TRT";
    const age = document.getElementById("trt-applicant-age")?.value || "38";
    const ageExKey = document.getElementById("trt-age-exemption")?.value || "none";
    const ageExText = (AGE_EX_LABELS[ageExKey] || AGE_EX_LABELS.none)[en ? "en" : "ko"];
    const m1 = document.getElementById("trt-emp1-months")?.value || "15";
    const h1 = document.getElementById("trt-emp1-hours")?.value || "38";
    const m2 = document.getElementById("trt-emp2-months")?.value || "9";
    const h2 = document.getElementById("trt-emp2-hours")?.value || "38";
    const cease = document.getElementById("c8607-cessation-date")?.value || ParkCoDates.todayBrisbaneIso();
    const visa = document.getElementById("saf-visa-type")?.selectedOptions?.[0]?.text || "SID 482";
    const turnover = document.getElementById("saf-turnover")?.value === "small"
      ? (en ? "<$10M Small Business" : "$10M 미만 중소기업")
      : (en ? "≥$10M Large Business" : "$10M 이상 대기업");

    const todayStr = ParkCoDates.todayBrisbaneIso();
    const text = en ? [
      "=== [PNC Legal Pty Ltd t/a Park & Co Lawyers | Employer Sponsored (482·186·494) Diagnostic Brief] ===",
      `• Date (Brisbane): ${todayStr} (FY2026–27 CSIT $79,423 / SSIT $146,576 / 494 Nom $0 reg 2.73B)`,
      `• Target Visa & Sponsor Size: ${visa} | Turnover: ${turnover}`,
      `• Offered GAE / AMSR: AUD $${Number(salary).toLocaleString("en-AU")} / AMSR AUD $${Number(amsr).toLocaleString("en-AU")}`,
      `• Experience & Age: ${trtMode} | Age ${age} (${ageExText}) | Emp1: ${m1}m (${h1}h/wk) + Emp2: ${m2}m (${h2}h/wk)`,
      `• Condition 8607 Reference: Cessation ${cease} (180d consecutive / 365d cumulative window)`,
      `• Official Inquiry: enquiry@parkcolawyers.com | https://parklawyers.com.au/links/`
    ].join("\n") : [
      "=== [법무법인 박앤코 (Park & Co Lawyers) | 호주 고용주 스폰서 (482·186·494) 진단 요약서] ===",
      `• 진단 기준일(브리즈번): ${todayStr} (FY2026–27 CSIT $79,423 / SSIT $146,576 / 494 노미네이션 $0 reg 2.73B)`,
      `• 희망 비자 및 기업 규모: ${visa} | 스폰서 매출: ${turnover}`,
      `• 제안 기본급(GAE) / 시장연봉(AMSR): AUD $${Number(salary).toLocaleString("en-AU")} / AMSR AUD $${Number(amsr).toLocaleString("en-AU")}`,
      `• 경력 및 연령 진단: ${trtMode} | 만 ${age}세 (${ageExText}) | 제1직장 ${m1}개월(${h1}h) + 제2직장 ${m2}개월(${h2}h)`,
      `• Condition 8607 기준일: 고용 종료일 ${cease} (연속 180일 / 누적 365일 유예 점검)`,
      `• 공식 법률 문의: enquiry@parkcolawyers.com | https://parklawyers.com.au/links/?lang=ko`
    ].join("\n");

    previewEl.textContent = text;
    if (emailBtn) {
      emailBtn.href = en ? "https://parklawyers.com.au/links/" : "https://parklawyers.com.au/links/?lang=ko";
      emailBtn.target = "_blank";
      emailBtn.rel = "noopener";
      emailBtn.onclick = function () {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).catch(function () {});
        }
      };
    }
  }

  /* 6-B. ABF Sponsor Sanctions & Prohibited Employers Explorer */
  function renderAbfSanctionsExplorer() {
    if (typeof document === "undefined") return;
    const en = STATE.lang === "en";
    const abf = STATE.abf || DEFAULT_ABF_DATA;
    const totalCount = abf.total_sanctions || 1850;
    const prohCount = abf.prohibited_employers_count || 1;
    const liveBadge = document.getElementById("abf-live-badge");
    if (liveBadge) {
      liveBadge.textContent = en
        ? `● ABF Live API: ${totalCount.toLocaleString("en-AU")} Sanctions / ${prohCount} Prohibited Employer`
        : `● ABF 실시간 집계: 제재 ${totalCount.toLocaleString("en-AU")}건 / 금지 고용주 ${prohCount}곳`;
    }

    const obChart = document.getElementById("svg-abf-obligation-chart");
    const stateBox = document.getElementById("abf-prohibited-And-state-box");
    const tbody = document.getElementById("abf-sanctions-tbody");

    const byOb = abf.by_obligation || { "2.84": 727, "2.86": 500, "2.83": 359, "2.79": 273, "2.82": 192 };
    if (obChart) {
      const bars = [
        { code: "reg 2.84", label: en ? "Fail to provide info" : "감사자료 미제출", count: byOb["2.84"] || 727, color: "#0E3A3E" },
        { code: "reg 2.86", label: en ? "Work outside occupation" : "승인직군 외 근무", count: byOb["2.86"] || 500, color: "#B68B40" },
        { code: "reg 2.83", label: en ? "Record-keeping breach" : "기록보관 위반(2.83)", count: byOb["2.83"] || 359, color: "#1F5A5E" },
        { code: "reg 2.79", label: en ? "Salary / AMSR breach" : "임금·AMSR 위반", count: byOb["2.79"] || 273, color: "#9B2C2C" },
        { code: "reg 2.82", label: en ? "Payroll record breach" : "급여기록 미비(2.82)", count: byOb["2.82"] || 192, color: "#2E6B4F" }
      ];
      const maxVal = Math.max(750, ...bars.map((b) => b.count));
      obChart.innerHTML = `
        <svg viewBox="0 0 620 215" width="100%" style="display:block;height:auto;font-family:'Pretendard Variable','Manrope',sans-serif;">
          <rect x="0" y="0" width="620" height="215" rx="8" fill="#FBF9F5"/>
          ${bars.map((b, i) => {
            const y = 18 + i * 38;
            const w = Math.round((b.count / maxVal) * 330);
            return `
              <text x="14" y="${y + 16}" font-size="11.5" font-weight="800" fill="#14282A">${b.code}</text>
              <text x="78" y="${y + 16}" font-size="11" fill="#47433E">${b.label}</text>
              <rect x="205" y="${y + 3}" width="${w}" height="18" rx="4" fill="${b.color}"/>
              <text x="${213 + w}" y="${y + 16}" font-size="11.5" font-weight="800" fill="${b.color}">${b.count.toLocaleString("en-AU")}${en ? "" : "건"}</text>
            `;
          }).join("")}
        </svg>
      `;
    }

    if (stateBox) {
      const bySt = abf.by_state || { QLD: 501, NSW: 449, VIC: 390, WA: 272, SA: 165, NT: 31, ACT: 26, TAS: 16 };
      const prohList = Array.isArray(abf.prohibited_employers) && abf.prohibited_employers.length
        ? abf.prohibited_employers
        : [{ legal_name: "Eatalian Deli (WA) Pty Ltd", trading_name: "EATALIAN RISTORANTE", abn: "68660788885", state: "WA", imposed_date: "24-Sep-2025", end_date: "24-Sep-2030", reason: "Subject to a migrant worker sanction (s 245AYM)" }];
      const stPills = Object.entries(bySt).slice(0, 8).map(([k, v]) => `
        <div class="mini-kpi" style="padding:8px 10px;">
          <span>${k}</span>
          <strong style="font-size:15px;">${Number(v).toLocaleString("en-AU")}</strong>
        </div>
      `).join("");
      stateBox.innerHTML = `
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:10px;">${stPills}</div>
        <div class="alert-box alert-box--danger" style="margin:0;font-size:12.5px;">
          <strong>🚨 ${en ? `s 245AYM Prohibited Employer Register (${prohList.length} Active)` : `s 245AYM 금지 고용주 등재 현황 (현행 ${prohList.length}곳)`}</strong>:<br/>
          ${prohList.map((p) => `• <strong>${p.legal_name || p.name || "Eatalian Deli (WA) Pty Ltd"}</strong> (t/a ${p.trading_name || "-"} · ABN <code>${p.abn || "-"}</code> · ${p.state || "-"}) · <strong>${p.imposed_date} → ${p.end_date}</strong> (${p.reason})`).join("<br/>")}
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
            <strong>${r.sponsor_name || "-"}</strong>
            ${r.trading_name && r.trading_name !== r.sponsor_name ? `<div style="font-size:11.5px;color:#525866;">t/a ${r.trading_name}</div>` : ""}
          </td>
          <td><code>${r.abn || "-"}</code><div style="font-size:11.5px;color:#525866;">${r.state} ${r.postcode}</div></td>
          <td>
            <strong>${r.sanction_imposed}</strong>
            ${r.infringement_amount ? `<div style="font-size:11.5px;color:#9B2C2C;font-weight:700;">Infringement: ${r.infringement_amount}</div>` : ""}
          </td>
          <td><code>${r.obligations_breached || "-"}</code></td>
          <td style="font-size:12px;">${r.imposed_date} ~ ${r.end_date}</td>
          <td>
            ${r.is_active
              ? `<span class="badge badge-burgundy">${en ? "● Active Bar" : "● 제재 유효"}</span>`
              : `<span class="badge-ok" style="background:#E5E7EB;color:#374151;">${en ? "Historical (Expired)" : "기간 만료(이력)"}</span>`}
          </td>
        </tr>
      `).join("") || `<tr><td colspan="6" style="text-align:center;padding:18px;">${en ? "No matching sanction records." : "조건에 일치하는 제재 기록이 없습니다."}</td></tr>`;
    }
  }

  /* 7. Render Poller Table & Modal */
  function renderPollerTable(sources) {
    if (typeof document === "undefined") return;
    const en = STATE.lang === "en";
    const tbody = document.getElementById("sid-poller-tbody");
    const statusBadge = (s) => {
      if (s.status === "cached_last_good") {
        return `<span class="badge badge-burgundy" title="Preserved last verified snapshot">● Cached Snapshot</span>`;
      }
      return `<span class="badge-ok">● Verified Live (${s.http_status || 200})</span>`;
    };
    const compLine = (s) => s.compilation
      ? `<div style="font-size:11.5px;color:#0E3A3E;font-weight:700;margin-top:2px;">FRL Compilation #${s.compilation} (${s.register_id || ""}) · Effective ${s.effective_start || ""}</div>`
      : "";
    const rowsHtml = sources.map((s, idx) => `
      <tr>
        <td><code>${idx + 1}</code></td>
        <td><span class="badge badge-burgundy">${s.category}</span></td>
        <td>
          <a href="${s.url}" target="_blank" rel="noopener"><strong>${en ? s.name_en : s.name_ko}</strong></a>
          ${compLine(s)}
          <div style="font-size:11.5px;color:#525866;margin-top:2px;">SHA-256: <code>${s.sha256_prefix || "-"}</code> (${Math.round((s.content_length || 48200) / 1024)} KB)</div>
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
            ? `Live status of ${sources.length} Department of Home Affairs, ABF Sponsor Sanctions & Federal Register of Legislation primary sources verified by <code>poller/sid_ens_poller.py</code>.`
            : `<code>poller/sid_ens_poller.py</code>가 정기 검증하는 ${sources.length}개 호주 연방 이민성·국경수비대(ABF)·연방 법령 등록부(FRL) 1차 출처 상태입니다.`}
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
                    <div style="font-size:11.5px;color:#525866;">SHA-256: <code>${s.sha256_prefix || "-"}</code> (${Math.round((s.content_length || 48200) / 1024)} KB)</div>
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

  /* Role Tab Switching */
  function setRoleTab(role) {
    if (typeof document === "undefined") return;
    STATE.roleTab = role || "all";
    document.querySelectorAll(".pk-role-tab").forEach((btn) => {
      const active = btn.getAttribute("data-role-tab") === STATE.roleTab;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-selected", active ? "true" : "false");
    });
    document.querySelectorAll("[data-role-panel]").forEach((sec) => {
      if (STATE.roleTab === "all") {
        sec.hidden = false;
      } else {
        const roles = (sec.getAttribute("data-role-panel") || "").split(/\s+/);
        sec.hidden = !roles.includes(STATE.roleTab);
      }
    });
  }

  /* Language Switching & URL ?lang= Sync */
  function applyLang(lang, pushUrl) {
    if (typeof document === "undefined") return;
    STATE.lang = lang === "en" ? "en" : "ko";
    document.documentElement.lang = STATE.lang;
    document.querySelectorAll(".lang-btn").forEach((b) => {
      b.classList.toggle("active", b.getAttribute("data-lang") === STATE.lang);
    });
    const dict = I18N[STATE.lang] || I18N.ko;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.getAttribute("data-i18n");
      if (k && dict[k]) el.textContent = dict[k];
    });
    const isEn = STATE.lang === "en";
    document.querySelectorAll(".parkco-svc-link").forEach((lnk) => {
      const h = isEn ? lnk.getAttribute("data-en-href") : lnk.getAttribute("data-ko-href");
      if (h) lnk.setAttribute("href", h);
    });
    document.querySelectorAll("a.cta-enquiry").forEach((a) => {
      a.setAttribute("href", isEn ? "https://parklawyers.com.au/links/" : "https://parklawyers.com.au/links/?lang=ko");
    });
    const abfSearch = document.getElementById("abf-search-input");
    if (abfSearch) {
      abfSearch.placeholder = isEn ? "e.g. Pty Ltd, ABN, Restaurant, Construction..." : "예: Pty Ltd, ABN 번호, Restaurant, Construction...";
    }
    if (pushUrl && typeof window !== "undefined" && window.history && window.history.replaceState) {
      try {
        const u = new URL(window.location.href);
        u.searchParams.set("lang", STATE.lang);
        window.history.replaceState({}, "", u.toString());
      } catch (_) {}
    }
    renderCharts();
    updateStreamChecker();
    updateTrtCalculator();
    updateCondition8607();
    updateSafCalculator();
    renderAbfSanctionsExplorer();
    if (STATE.sources.length) renderPollerTable(STATE.sources);
  }

  function activateDemoData() {
    STATE.hasInteracted = true;
    const ceaseEl = document.getElementById("c8607-cessation-date");
    if (ceaseEl && !ceaseEl.value) ceaseEl.value = ParkCoDates.todayBrisbaneIso();
    updateStreamChecker();
    updateTrtCalculator();
    updateCondition8607();
    updateSafCalculator();
  }

  function markInteractedAndRun(fn) {
    return function () {
      STATE.hasInteracted = true;
      fn();
    };
  }

  /* 8. Initialize Browser UI */
  function init() {
    if (typeof document === "undefined") return;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.getAttribute("data-i18n");
      if (k && !I18N.ko[k]) I18N.ko[k] = el.textContent.trim();
    });

    const ceaseInput = document.getElementById("c8607-cessation-date");
    if (ceaseInput) {
      ceaseInput.value = ParkCoDates.todayBrisbaneIso();
    }

    renderCharts();
    updateStreamChecker();
    updateTrtCalculator();
    updateCondition8607();
    updateSafCalculator();
    renderAbfSanctionsExplorer();
    renderPollerTable(STATE.sources);

    document.querySelectorAll(".pk-role-tab").forEach((btn) => {
      btn.addEventListener("click", function () {
        setRoleTab(this.getAttribute("data-role-tab") || "all");
      });
    });

    document.querySelectorAll('.pk-unified-header__links a[href^="#"]').forEach((lnk) => {
      lnk.addEventListener("click", function () {
        const targetId = (this.getAttribute("href") || "").slice(1);
        const sec = targetId ? document.getElementById(targetId) : null;
        if (sec && sec.hidden) {
          setRoleTab("all");
        }
      });
    });

    document.addEventListener("click", function (ev) {
      const demoBtn = ev.target && ev.target.closest ? ev.target.closest(".pk-demo-trigger") : null;
      if (demoBtn) {
        activateDemoData();
      }
    });

    ["sm-major-group", "sm-lodgement-period", "sm-offered-salary", "sm-amsr", "sm-au-worker", "sm-award-applies", "sm-dama-region"].forEach((id) => {
      document.getElementById(id)?.addEventListener("input", markInteractedAndRun(updateStreamChecker));
      document.getElementById(id)?.addEventListener("change", markInteractedAndRun(updateStreamChecker));
    });
    ["abf-search-input", "abf-state-filter", "abf-ob-filter", "abf-status-filter"].forEach((id) => {
      document.getElementById(id)?.addEventListener("input", renderAbfSanctionsExplorer);
      document.getElementById(id)?.addEventListener("change", renderAbfSanctionsExplorer);
    });
    ["trt-target-mode", "trt-applicant-age", "trt-emp1-months", "trt-emp1-hours", "trt-emp2-months", "trt-emp2-hours", "trt-unpaid-days", "trt-age-exemption"].forEach((id) => {
      document.getElementById(id)?.addEventListener("input", markInteractedAndRun(updateTrtCalculator));
      document.getElementById(id)?.addEventListener("change", markInteractedAndRun(updateTrtCalculator));
    });
    ["c8607-cessation-date", "c8607-visa-expiry", "c8607-prior-gap-days", "c8607-licensed-occ"].forEach((id) => {
      document.getElementById(id)?.addEventListener("input", markInteractedAndRun(updateCondition8607));
      document.getElementById(id)?.addEventListener("change", markInteractedAndRun(updateCondition8607));
    });
    ["saf-visa-type", "saf-turnover", "saf-years", "saf-need-sbs", "saf-adults", "saf-children"].forEach((id) => {
      document.getElementById(id)?.addEventListener("input", markInteractedAndRun(updateSafCalculator));
      document.getElementById(id)?.addEventListener("change", markInteractedAndRun(updateSafCalculator));
    });

    document.getElementById("btn-sid-copy")?.addEventListener("click", function () {
      if (!STATE.hasInteracted) activateDemoData();
      const txt = document.getElementById("sid-diagnostic-preview")?.textContent || "";
      navigator.clipboard?.writeText(txt);
      this.textContent = STATE.lang === "en" ? "✅ Copied!" : "✅ 복사 완료!";
      setTimeout(() => {
        this.textContent = STATE.lang === "en" ? "📋 Copy Diagnostic Summary" : "📋 진단 요약 클립보드 복사";
      }, 2000);
    });
    document.getElementById("btn-sid-print")?.addEventListener("click", function () {
      if (typeof window !== "undefined" && window.print) window.print();
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

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        applyLang(this.getAttribute("data-lang") || "ko", true);
      });
    });

    if (typeof window !== "undefined") {
      try {
        const params = new URLSearchParams(window.location.search || "");
        if (params.get("lang") === "en") applyLang("en", false);
      } catch (_) {}

      if (window.location && window.location.protocol !== "file:" && typeof fetch === "function") {
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
              if (STATE.hasInteracted) updateStreamChecker();
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
    }
  }

  const exportedApi = {
    ParkCoDates,
    PERIOD_THRESHOLDS,
    AGE_EX_LABELS,
    DEFAULT_SOURCES,
    DEFAULT_ABF_DATA,
    evaluateSalaryAndStream,
    evaluateExperienceAndAge,
    evaluateCondition8607,
    evaluateSafAndVac
  };
  if (typeof window !== "undefined") window.SID_ENS_NAVIGATOR = exportedApi;
  if (typeof globalThis !== "undefined") globalThis.SID_ENS_NAVIGATOR = exportedApi;
  if (typeof module !== "undefined" && module.exports) module.exports = exportedApi;

  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  }
})();
