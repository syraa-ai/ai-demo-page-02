
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <p>Welcome, and thank you for your interest in syraa.live Inc. (<strong>"Syraa," "we,"</strong> or <strong>"us"</strong>) and our website at <a href="https://www.syraa.live/" className="text-blue-600 hover:underline">www.syraa.live</a>, along with our related websites, hosted applications, and other services provided by us (collectively, the <strong>"Service"</strong>). These Terms of Service are a legally binding contract between you and Syraa regarding your use of the Service.</p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">PLEASE READ THE FOLLOWING TERMS CAREFULLY:</h3>
            <div className="bg-yellow-50 p-4 border-l-4 border-yellow-400 text-sm">
              <p>BY CLICKING <strong>"I ACCEPT,"</strong> OR BY OTHERWISE ACCESSING OR USING THE SERVICE, YOU AGREE THAT YOU HAVE READ AND UNDERSTOOD, AND, AS A CONDITION TO YOUR USE OF THE SERVICE, YOU AGREE TO BE BOUND BY, THE FOLLOWING TERMS AND CONDITIONS, INCLUDING SYRAA'S PRIVACY POLICY [<a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>] (TOGETHER, THESE <strong>"TERMS"</strong>). If you are not eligible, or do not agree to the Terms, then you do not have our permission to use the Service. <strong>YOUR USE OF THE SERVICE, AND SYRAA'S PROVISION OF THE SERVICE TO YOU, CONSTITUTES AN AGREEMENT BY SYRAA AND BY YOU TO BE BOUND BY THESE TERMS.</strong></p>
            </div>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Arbitration NOTICE.</h3>
            <div className="bg-red-50 p-4 border-l-4 border-red-400 text-sm">
              <p>Except for certain kinds of disputes described in Section 17 (Dispute Resolution and Arbitration), you agree that disputes arising under these Terms will be resolved by binding, individual arbitration, and <strong>BY ACCEPTING THESE TERMS, YOU AND SYRAA ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN ANY CLASS ACTION OR REPRESENTATIVE PROCEEDING.</strong></p>
            </div>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Syraa Service Overview</h2>
                <p>Syraa provides a platform that allows users to build personalized AI chatbots that interface with different sources of information, such as Google Calendar, email, or documents. We also make our software development kit (<strong>"SDK"</strong>) available to developers who would like to write their own agents or plugins to the Service that extend its capabilities (each, a <strong>"Third Party Plugin"</strong>).</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
                <p>You must be at least 18 years old to use the Service. By agreeing to these Terms, you represent and warrant to us that: (a) you are at least 18 years old; (b) you have not previously been suspended or removed from the Service; and (c) your registration and your use of the Service is in compliance with any and all applicable laws and regulations. If you are an entity, organization, or company, the individual accepting these Terms on your behalf represents and warrants that they have authority to bind you to these Terms and you agree to be bound by these Terms.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Accounts and Registration</h2>
                <p>To access features of the Service, you must sign in with either your Google account or GitHub account. When you first sign in, you may be required to provide us with some information about yourself, such as your name, email address, or other contact information. You agree that the information you provide to us is accurate, complete, and not misleading, and that you will keep it accurate and up to date at all times. You are solely responsible for maintaining the confidentiality of your account and password, and you accept responsibility for all activities that occur under your account. If you believe that your account is no longer secure, then you should immediately notify us at <a href="mailto:legal@syraa.live" className="text-blue-600 hover:underline">legal@syraa.live</a>.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Permission to Access</h2>
                <p>When you first sign-in to the Service, the Service will ask your permission to access your system or certain applications, such as Google Calendar and email. You acknowledge and agree that failure to grant the necessary permission to your system or application(s) may affect the performance of the Service and your ability to use certain features of the Service. Syraa is not responsible for any loss or consequences resulting from your failure to grant the necessary permissions under this Section 4 (Permission to Access).</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. Licenses</h2>
                <h3 className="text-xl font-medium mb-3">5.1 Limited License</h3>
                <p>Subject to your complete and ongoing compliance with these Terms, Syraa grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Service.</p>
                
                <h3 className="text-xl font-medium mb-3 mt-6">5.2 License Restrictions</h3>
                <p>Except and solely to the extent such a restriction is impermissible under applicable law, you may not: (a) reproduce, distribute, publicly display, publicly perform, or create derivative works of the Service; (b) make modifications to the Service; or (c) interfere with or circumvent any feature of the Service, including any security or access control mechanism. If you are prohibited under applicable law from using the Service, then you may not use it. We may impose limits on your use of the Service, for example, in the form of a daily usage limit (e.g., number of Syraa calls per day) or as otherwise specified by us on the Service (<strong>"Usage Limit"</strong>). You will not exceed the Usage Limit of the Service without our prior approval, and we reserve the right to suspend or block your access to the Service in the event you breached any restriction set forth in this Section 5.2 (License Restrictions).</p>
                
                <h3 className="text-xl font-medium mb-3 mt-6">5.3 Feedback</h3>
                <p>We respect and appreciate the thoughts and comments from our users If you choose to provide input and suggestions regarding existing functionalities, problems with or proposed modifications or improvements to the Service (<strong>"Feedback"</strong>), then you hereby grant Syraa an unrestricted, perpetual, irrevocable, non-exclusive, fully-paid, royalty-free right and license to exploit the Feedback in any manner and for any purpose, including to improve the Service and create other products and services. We will have no obligation to provide you with attribution for any Feedback you provide to us.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Ownership; Proprietary Rights</h2>
                <p>The Service is owned and operated by Syraa. The visual interfaces, graphics, design, compilation, information, data, computer code (including source code or object code), products, software, services, and all other elements of the Service provided by Syraa (collectively, <strong>"Materials"</strong>) are protected by intellectual property and other laws. All Materials included in and related to the Service are the property of Syraa or its third-party licensors. Except as expressly authorized by Syraa, you may not make use of the Materials. There are no implied licenses in these Terms and Syraa reserves all rights to the Materials not granted expressly in these Terms.</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">17. Dispute Resolution and Arbitration</h2>
                <h3 className="text-xl font-medium mb-3">17.1 Generally</h3>
                <p>Except as described in Section 17.2 (Exceptions) and 17.3 (Opt-Out), you and Syraa agree that every dispute arising in connection with these Terms, the Service, or communications from us will be resolved through binding arbitration. Arbitration uses a neutral arbitrator instead of a judge or jury, is less formal than a court proceeding, may allow for more limited discovery than in court, and is subject to very limited review by courts. This agreement to arbitrate disputes includes all claims whether based in contract, tort, statute, fraud, misrepresentation, or any other legal theory, and regardless of whether a claim arises during or after the termination of these Terms. Any dispute relating to the interpretation, applicability, or enforceability of this binding arbitration agreement will be resolved by the arbitrator.</p>
                
                <div className="bg-red-50 p-4 border-l-4 border-red-400 text-sm font-bold mt-4">
                  <p>YOU UNDERSTAND AND AGREE THAT, BY ENTERING INTO THESE TERMS, YOU AND SYRAA ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION.</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">18. Miscellaneous</h2>
                <h3 className="text-xl font-medium mb-3">18.2 Governing Law</h3>
                <p>These Terms are governed by the laws of India without regard to conflict of law principles. You and Syraa submit to the personal and exclusive jurisdiction of the state courts located within New Delhi, India for resolution of any lawsuit or court proceeding permitted under these Terms.</p>
                
                <h3 className="text-xl font-medium mb-3 mt-6">18.3 Privacy Policy</h3>
                <p>Please read the Syraa Privacy Policy [<a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>] (the <strong>"Privacy Policy"</strong>) carefully for information relating to our collection, use, storage, and disclosure of your personal information. The Syraa Privacy Policy is incorporated by this reference into, and made a part of, these Terms.</p>
              </section>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200 text-center">
              <a href="/" className="text-blue-600 hover:underline">Back to Home</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
