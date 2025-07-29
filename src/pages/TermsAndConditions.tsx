
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-6 py-12 max-w-4xl">
          <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
            <h1 className="text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>

            <div className="prose prose-lg max-w-none space-y-6 text-foreground">
              <p className="text-muted-foreground leading-relaxed">Welcome, and thank you for your interest in meetsyra.com (<strong className="text-foreground">"Syra," "we,"</strong> or <strong className="text-foreground">"us"</strong>) and our website at <a href="https://www.meetsyra.com/" className="text-primary hover:text-primary/80 underline">www.meetsyra.com</a>, along with our related websites, hosted applications, and other services provided by us (collectively, the <strong className="text-foreground">"Service"</strong>). These Terms of Service are a legally binding contract between you and Syra regarding your use of the Service.</p>
              
              <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">PLEASE READ THE FOLLOWING TERMS CAREFULLY:</h3>
              <div className="bg-yellow-500/10 p-4 border-l-4 border-yellow-500 text-sm rounded-r-lg">
                <p className="text-foreground">BY CLICKING <strong>"I ACCEPT,"</strong> OR BY OTHERWISE ACCESSING OR USING THE SERVICE, YOU AGREE THAT YOU HAVE READ AND UNDERSTOOD, AND, AS A CONDITION TO YOUR USE OF THE SERVICE, YOU AGREE TO BE BOUND BY, THE FOLLOWING TERMS AND CONDITIONS, INCLUDING SYRA'S PRIVACY POLICY (TOGETHER, THESE <strong>"TERMS"</strong>). If you are not eligible, or do not agree to the Terms, then you do not have our permission to use the Service. <strong>YOUR USE OF THE SERVICE, AND SYRA'S PROVISION OF THE SERVICE TO YOU, CONSTITUTES AN AGREEMENT BY SYRA AND BY YOU TO BE BOUND BY THESE TERMS.</strong></p>
              </div>
              
              <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">Arbitration NOTICE.</h3>
              <div className="bg-red-500/10 p-4 border-l-4 border-red-500 text-sm rounded-r-lg">
                <p className="text-foreground">Except for certain kinds of disputes described in Section 17 (Dispute Resolution and Arbitration), you agree that disputes arising under these Terms will be resolved by binding, individual arbitration, and <strong>BY ACCEPTING THESE TERMS, YOU AND SYRA ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN ANY CLASS ACTION OR REPRESENTATIVE PROCEEDING.</strong></p>
              </div>
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Syra Service Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">Syra provides a platform that allows users to build personalized AI chatbots that interface with different sources of information, such as Google Calendar, email, or documents. We also make our software development kit (<strong className="text-foreground">"SDK"</strong>) available to developers who would like to write their own agents or plugins to the Service that extend its capabilities (each, a <strong className="text-foreground">"Third Party Plugin"</strong>).</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Eligibility</h2>
                  <p className="text-muted-foreground leading-relaxed">You must be at least 18 years old to use the Service. By agreeing to these Terms, you represent and warrant to us that: (a) you are at least 18 years old; (b) you have not previously been suspended or removed from the Service; and (c) your registration and your use of the Service is in compliance with any and all applicable laws and regulations. If you are an entity, organization, or company, the individual accepting these Terms on your behalf represents and warrants that they have authority to bind you to these Terms and you agree to be bound by these Terms.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Accounts and Registration</h2>
                  <p className="text-muted-foreground leading-relaxed">To access features of the Service, you must sign in with either your Google account or GitHub account. When you first sign in, you may be required to provide us with some information about yourself, such as your name, email address, or other contact information. You agree that the information you provide to us is accurate, complete, and not misleading, and that you will keep it accurate and up to date at all times. You are solely responsible for maintaining the confidentiality of your account and password, and you accept responsibility for all activities that occur under your account. If you believe that your account is no longer secure, then you should immediately notify us at <a href="mailto:legal@meetsyra.com" className="text-primary hover:text-primary/80 underline">legal@meetsyra.com</a>.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">4. Permission to Access</h2>
                  <p className="text-muted-foreground leading-relaxed">When you first sign-in to the Service, the Service will ask your permission to access your system or certain applications, such as Google Calendar and email. You acknowledge and agree that failure to grant the necessary permission to your system or application(s) may affect the performance of the Service and your ability to use certain features of the Service. Syra is not responsible for any loss or consequences resulting from your failure to grant the necessary permissions under this Section 4 (Permission to Access).</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Licenses</h2>
                  <h3 className="text-xl font-medium mb-3 text-foreground">5.1 Limited License</h3>
                  <p className="text-muted-foreground leading-relaxed">Subject to your complete and ongoing compliance with these Terms, Syra grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Service.</p>
                  
                  <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">5.2 License Restrictions</h3>
                  <p className="text-muted-foreground leading-relaxed">Except and solely to the extent such a restriction is impermissible under applicable law, you may not: (a) reproduce, distribute, publicly display, publicly perform, or create derivative works of the Service; (b) make modifications to the Service; or (c) interfere with or circumvent any feature of the Service, including any security or access control mechanism. If you are prohibited under applicable law from using the Service, then you may not use it. We may impose limits on your use of the Service, for example, in the form of a daily usage limit (e.g., number of Syra calls per day) or as otherwise specified by us on the Service (<strong className="text-foreground">"Usage Limit"</strong>). You will not exceed the Usage Limit of the Service without our prior approval, and we reserve the right to suspend or block your access to the Service in the event you breached any restriction set forth in this Section 5.2 (License Restrictions).</p>
                  
                  <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">5.3 Feedback</h3>
                  <p className="text-muted-foreground leading-relaxed">We respect and appreciate the thoughts and comments from our users If you choose to provide input and suggestions regarding existing functionalities, problems with or proposed modifications or improvements to the Service (<strong className="text-foreground">"Feedback"</strong>), then you hereby grant Syra an unrestricted, perpetual, irrevocable, non-exclusive, fully-paid, royalty-free right and license to exploit the Feedback in any manner and for any purpose, including to improve the Service and create other products and services. We will have no obligation to provide you with attribution for any Feedback you provide to us.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Ownership; Proprietary Rights</h2>
                  <p className="text-muted-foreground leading-relaxed">The Service is owned and operated by Syra. The visual interfaces, graphics, design, compilation, information, data, computer code (including source code or object code), products, software, services, and all other elements of the Service provided by Syra (collectively, <strong className="text-foreground">"Materials"</strong>) are protected by intellectual property and other laws. All Materials included in and related to the Service are the property of Syra or its third-party licensors. Except as expressly authorized by Syra, you may not make use of the Materials. There are no implied licenses in these Terms and Syra reserves all rights to the Materials not granted expressly in these Terms.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">7. Third-Party Terms</h2>
                  <h3 className="text-xl font-medium mb-3 text-foreground">7.1 Third-Party Services and Linked Websites</h3>
                  <p className="text-muted-foreground leading-relaxed">Syra may provide tools through the Service that enable you to export information, including User Content, to third-party services, including through features that allow you to link your account on the Service with an account on the third-party service, such as Twitter or Facebook, or through our implementation of third-party buttons (such as "like" or "share" buttons). By using one of these tools, you hereby authorize that Syra to transfer that information to the applicable third-party service. Third-party services are not under Syra's control, and, to the fullest extent permitted by law, Syra is not responsible for any third-party service's use of your exported information. The Service may also contain links to third-party websites. Linked websites are not under Syra's control, and Syra is not responsible for their content. Please be sure to review the terms of use and privacy policy of any third-party services before you share any User Content or information with such third-party services. Once sharing occurs, Syra will have no control over the information that has been shared.</p>
                  
                  <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">7.2 Third-Party Software</h3>
                  <p className="text-muted-foreground leading-relaxed">The Service may include or incorporate third-party software components that are generally available free of charge under licenses granting recipients broad rights to copy, modify, and distribute those components (<strong className="text-foreground">"Third-Party Components"</strong>). Although the Service is provided to you subject to these Terms, nothing in these Terms prevents, restricts, or is intended to prevent or restrict you from obtaining Third-Party Components under the applicable third-party licenses or to limit your use of Third-Party Components under those third-party licenses.</p>
                  
                  <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">7.3 OpenAI Terms</h3>
                  <p className="text-muted-foreground leading-relaxed">The Service is powered by the artificial intelligence (<strong className="text-foreground">"AI"</strong>) models offered by OpenAI, including GPT-3 and DALL-E, that generate outputs in response to your input to the Service. By accessing or using the Service, you agree to the following terms of OpenAI (<strong className="text-foreground">"OpenAI Terms"</strong>), which are incorporated into these Terms by this reference:</p>
                  <ul className="list-disc ml-6 mt-3 space-y-2">
                    <li>OpenAI Terms of Service available at: <a href="https://openai.com/terms/" className="text-primary hover:text-primary/80 underline">https://openai.com/terms/</a></li>
                    <li>OpenAI Privacy Policy available at: <a href="https://openai.com/privacy/" className="text-primary hover:text-primary/80 underline">https://openai.com/privacy/</a></li>
                    <li>DALL-E Content Policy available at: <a href="https://labs.openai.com/policies/content-policy" className="text-primary hover:text-primary/80 underline">https://labs.openai.com/policies/content-policy</a></li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">8. User Content</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">The Service may permit users to submit, upload, publish, broadcast, or otherwise transmit (<strong className="text-foreground">"Post"</strong>) content to the Service, including messages, reviews, photos, inputs, images, folders, data, text, Third Party Plugins, and any other works of authorship or other works (<strong className="text-foreground">"User Content"</strong>). User Content also includes the output generated or produced by the Service or a Third Party Plugin in response to your input. You retain any copyright and other proprietary rights that you may hold in the User Content, subject to the licenses granted in these Terms.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">10. Prohibited Conduct</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4"><strong className="text-foreground">BY USING THE SERVICE, YOU AGREE NOT TO:</strong></p>
                  <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                    <li>use the Service for any illegal purpose or in violation of any local, state, national, or international law;</li>
                    <li>use the Service to generate content that: (a) harasses, bullies, or threatens any individual; (b) promotes hate, discrimination, self-harm, or violence; (c) is obscene or pornographic (excluding sex education and wellness); (d) attempts to influence the political process or is intended to be used for campaigning purposes; (f) attempts to defraud individuals or is otherwise false or misleading; or (g) is ransomware, keyloggers, viruses, or other harmful software or code;</li>
                    <li>violate, encourage others to violate, or provide instructions on how to violate, any right of a third party, including by infringing or misappropriating any third-party intellectual property right;</li>
                    <li>interfere with security-related features of the Service, including by: (i) disabling or circumventing features that prevent or limit use, printing or copying of any content; or (ii) reverse engineering or otherwise attempting to discover the source code of any portion of the Service except to the extent that the activity is expressly permitted by applicable law;</li>
                    <li>interfere with the operation of the Service or any user's enjoyment of the Service;</li>
                    <li>perform any fraudulent activity including impersonating any person or entity, claiming a false affiliation or identity, accessing any other Service account without permission;</li>
                    <li>sell or otherwise transfer the access granted under these Terms;</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">13. Term, Termination, and Modification of the Service</h2>
                  <p className="text-muted-foreground leading-relaxed">If you violate any provision of these Terms, then your authorization to access the Service and these Terms automatically terminate. In addition, Syra may, at its sole discretion, terminate these Terms or your account on the Service, or suspend or terminate your access to the Service, at any time for any reason or no reason, with or without notice, and without any liability to you arising from such termination. You may terminate your account and these Terms at any time by deleting your account on the Syra User Dashboard or by contacting customer service at <a href="mailto:legal@meetsyra.com" className="text-primary hover:text-primary/80 underline">legal@meetsyra.com</a>.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">17. Dispute Resolution and Arbitration</h2>
                  <h3 className="text-xl font-medium mb-3 text-foreground">17.1 Generally</h3>
                  <p className="text-muted-foreground leading-relaxed">Except as described in Section 17.2 (Exceptions) and 17.3 (Opt-Out), you and Syra agree that every dispute arising in connection with these Terms, the Service, or communications from us will be resolved through binding arbitration. Arbitration uses a neutral arbitrator instead of a judge or jury, is less formal than a court proceeding, may allow for more limited discovery than in court, and is subject to very limited review by courts. This agreement to arbitrate disputes includes all claims whether based in contract, tort, statute, fraud, misrepresentation, or any other legal theory, and regardless of whether a claim arises during or after the termination of these Terms. Any dispute relating to the interpretation, applicability, or enforceability of this binding arbitration agreement will be resolved by the arbitrator.</p>
                  
                  <div className="bg-red-500/10 p-4 border-l-4 border-red-500 text-sm font-bold mt-4 rounded-r-lg">
                    <p className="text-foreground">YOU UNDERSTAND AND AGREE THAT, BY ENTERING INTO THESE TERMS, YOU AND SYRA ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION.</p>
                  </div>

                  <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">17.2 Exceptions</h3>
                  <p className="text-muted-foreground leading-relaxed">Although we are agreeing to arbitrate most disputes between us, nothing in these Terms will be deemed to waive, preclude, or otherwise limit the right of either party to: (a) bring an individual action in small claims court; (b) pursue an enforcement action through the applicable federal, state, or local agency if that action is available; (c) seek injunctive relief in a court of law in aid of arbitration; or (d) to file suit in a court of law to address an intellectual property infringement claim.</p>

                  <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">17.3 Opt-Out</h3>
                  <p className="text-muted-foreground leading-relaxed">If you do not wish to resolve disputes by binding arbitration, you may opt out of the provisions of this Section 17 (Dispute Resolution and Arbitration) within 30 days after the date that you agree to these Terms by sending a letter to <a href="mailto:legal@meetsyra.com" className="text-primary hover:text-primary/80 underline">legal@meetsyra.com</a>, Attention: Legal Department – Arbitration Opt-Out, that specifies: your full legal name, the email address associated with your account on the Service, and a statement that you wish to opt out of arbitration (<strong className="text-foreground">"Opt-Out Notice"</strong>). Once Syra receives your Opt-Out Notice, this Section 17 (Dispute Resolution and Arbitration) will be void and any action arising out of these Terms will be resolved as set forth in Section 18.2 (Governing Law). The remaining provisions of these Terms will not be affected by your Opt-Out Notice.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-foreground">18. Miscellaneous</h2>
                  <h3 className="text-xl font-medium mb-3 text-foreground">18.1 General Terms</h3>
                  <p className="text-muted-foreground leading-relaxed">These Terms, including the Privacy Policy and any other agreements expressly incorporated by reference into these Terms, are the entire and exclusive understanding and agreement between you and Syra regarding your use of the Service. You may not assign or transfer these Terms or your rights under these Terms, in whole or in part, by operation of law or otherwise, without our prior written consent. We may assign these Terms and all rights granted under these Terms, including with respect to your User Content, at any time without notice or consent.</p>
                  
                  <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">18.2 Governing Law</h3>
                  <p className="text-muted-foreground leading-relaxed">These Terms are governed by the laws of India without regard to conflict of law principles. You and Syra submit to the personal and exclusive jurisdiction of the state courts located within New Delhi, India for resolution of any lawsuit or court proceeding permitted under these Terms.</p>
                  
                  <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">18.3 Privacy Policy</h3>
                  <p className="text-muted-foreground leading-relaxed">Please read the Syra Privacy Policy (the <strong className="text-foreground">"Privacy Policy"</strong>) carefully for information relating to our collection, use, storage, and disclosure of your personal information. The Syra Privacy Policy is incorporated by this reference into, and made a part of, these Terms.</p>

                  <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">18.5 Consent to Electronic Communications</h3>
                  <p className="text-muted-foreground leading-relaxed">By using the Service, you consent to receiving certain electronic communications from us as further described in our Privacy Policy. Please read our Privacy Policy to learn more about our electronic communications practices. You agree that any notices, agreements, disclosures, or other communications that we send to you electronically will satisfy any legal communication requirements, including that those communications be in writing.</p>

                  <h3 className="text-xl font-medium mb-3 mt-6 text-foreground">18.9 International Use</h3>
                  <p className="text-muted-foreground leading-relaxed">The Service is intended for visitors located within the United States. We make no representation that the Service is appropriate or available for use outside of the United States. Access to the Service from countries or territories or by individuals where such access is illegal is prohibited.</p>
                </section>
              </div>
              
              <div className="mt-12 pt-8 border-t border-border text-center">
                <a href="/" className="text-primary hover:text-primary/80 underline font-medium">Back to Home</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
