import React from "react";
import { Link } from "react-router-dom";
import NavForOther from "./NavForOther";

export default function TermsConditions() {
  return (
    <>
        <NavForOther />
    
    <div className="max-w-5xl mt-16 mx-auto px-4 py-10">

      {/* Breadcrumb */}
    
      <h1 className="text-4xl font-bold mb-6">
        Terms & Conditions
      </h1>

      <p className="text-gray-600 mb-8">
        Welcome to <strong>RISEZONIC</strong>. By accessing and using our
        website (<strong><Link className="text-blue-600" to="https://www.risezonic.com">https://www.risezonic.com</Link></strong>), you agree to
        comply with these Terms & Conditions. If you do not agree with these
        terms, please discontinue the use of our website and services.
      </p>

      <Section title="1. About Us">
        <p>
          <strong>Company Name:</strong> RISEZONIC
        </p>
        <p>
          <strong>Website:</strong> <Link className="text-blue-600" to="https://www.risezonic.com">https://www.risezonic.com</Link>
        </p>
        <p>
          <strong>Email:</strong> <Link to="mailto:info@risezonic.com">info@risezonic.com</Link>
        </p>

        <p className="mt-2">
          RISEZONIC is a Digital Marketing Agency offering SEO, Google Ads,
          Social Media Marketing, Website Development, Branding, Content
          Marketing, Local SEO, and Performance Marketing services.
        </p>
      </Section>

      <Section title="2. Acceptance of Terms">
        <p>
          By accessing our website or purchasing our services, you confirm that
          you have read, understood, and agreed to these Terms & Conditions.
        </p>
      </Section>

      <Section title="3. Our Services">
        <ul className="list-disc pl-5 space-y-2">
          <li>Search Engine Optimization (SEO)</li>
          <li>Google Ads (PPC)</li>
          <li>Meta Ads (Facebook & Instagram)</li>
          <li>Social Media Marketing</li>
          <li>Website Design & Development</li>
          <li>Content Marketing</li>
          <li>Graphic Designing & Branding</li>
          <li>Email Marketing</li>
          <li>Local SEO</li>
        </ul>
      </Section>

      <Section title="4. Client Responsibilities">
        <ul className="list-disc pl-5 space-y-2">
          <li>Provide accurate business information.</li>
          <li>Share required content, images, and login credentials.</li>
          <li>Review and approve work within the agreed timeframe.</li>
          <li>Make payments according to the agreed schedule.</li>
        </ul>
      </Section>

      <Section title="5. Payments">
        <ul className="list-disc pl-5 space-y-2">
          <li>Projects may require an advance payment.</li>
          <li>Invoices must be paid within the agreed due date.</li>
          <li>Late payments may delay or suspend services.</li>
          <li>Prices are subject to applicable taxes where required.</li>
        </ul>
      </Section>

      <Section title="6. Project Delivery">
        <p>
          Project timelines depend on project requirements, client response
          time, and the availability of required resources. Delays caused by the
          client may affect the delivery schedule.
        </p>
      </Section>

      <Section title="7. Revisions">
        <p>
          We provide revisions as agreed in the project scope. Additional
          revisions or changes beyond the original scope may incur additional
          charges.
        </p>
      </Section>

      <Section title="8. Marketing Results Disclaimer">
        <p>
          Digital marketing results vary depending on industry competition,
          search engine algorithm updates, advertising platform policies, market
          trends, and customer behavior. Therefore, RISEZONIC does not guarantee
          specific rankings, leads, conversions, or sales.
        </p>
      </Section>

      <Section title="9. Intellectual Property">
        <p>
          Upon full payment, ownership of the final approved deliverables will
          be transferred to the client unless otherwise agreed. RISEZONIC
          reserves the right to showcase completed work in its portfolio unless
          restricted by a written agreement.
        </p>
      </Section>

      <Section title="10. Confidentiality">
        <p>
          We respect the confidentiality of our clients and will not disclose
          confidential business information without prior consent unless
          required by law.
        </p>
      </Section>

      <Section title="11. Limitation of Liability">
        <ul className="list-disc pl-5 space-y-2">
          <li>Search engine algorithm updates.</li>
          <li>Google or Meta advertising policy changes.</li>
          <li>Website downtime caused by third-party hosting providers.</li>
          <li>Business losses or indirect damages.</li>
          <li>Third-party software or platform failures.</li>
        </ul>
      </Section>

      <Section title="12. Third-Party Services">
        <p>
          Our services may integrate with third-party platforms such as Google,
          Meta, WordPress, Shopify, and other software providers. Their
          respective terms and policies also apply.
        </p>
      </Section>

      <Section title="13. Termination">
        <p>
          Either party may terminate the agreement by providing written notice.
          Outstanding payments for completed work remain payable.
        </p>
      </Section>

      <Section title="14. Changes to Terms">
        <p>
          RISEZONIC reserves the right to modify these Terms & Conditions at any
          time. Updated versions will be posted on this page.
        </p>
      </Section>

      <Section title="15. Contact Us">
        <p>
          <strong>RISEZONIC</strong>
        </p>
        <p>Website: <Link to="www.risezonic.com" className="text-blue-600">www.risezonic.com</Link></p>
        <p>Email: <Link to="mailto:info@risezonic.com">info@risezonic.com</Link></p>
      </Section>

    </div>
    </>

  );
}

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <div className="text-gray-700 leading-8">{children}</div>
    </div>
    
  );
}