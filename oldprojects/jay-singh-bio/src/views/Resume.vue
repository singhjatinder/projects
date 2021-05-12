<template>
    <main>
        <section class="col">
            <p>Please click <a class="link" target="_blank" href="../assets/pdfs/Jatinder%20Singh%20-%20Resume.pdf">HERE</a> to download PDF version</p>
        </section>
        <details open>
            <summary>Education</summary>
            <details open>
                <summary class="subheading">Wentworth Institute of Technology, Boston, M.A<span>Graduated August 2016</span></summary>
                <p>Bachelor of Science in Computer Science </p>
                <p>GPA: 3.3/4.0</p>
            </details>
            <details open>
                <summary class="subheading">Boston University, Boston, M.A<span>Expected December 2020</span></summary>
                <p>Masters of Science in Computer Information Systems with Concentration in Web App Development</p>
                <p>GPA: 3.8/4.0</p>
            </details>
        </details>

        <details open>
            <summary>Skills</summary>
            <ul>
                <li>Operating System: Windows 7, Windows 8.1, 10, Ubuntu </li>
                <li>Languages: Java, C++, JavaScript, SQL, CSS, HTML, Python, PHP</li>
                <li>Framework: Selenium, Lean Functional Tool</li>
                <li>Trilingual – English, Punjabi and Hindi</li>
                <li>SSE Certified (Support Staff Excellence Certification)</li>
            </ul>
        </details>

        <details open>
            <summary>Software Projects</summary>
            <details open>
                <summary class="subheading">Absolute Zero Learning - Mobile App</summary>
                <p>Developed Absolute Zero Learning App with a team of 3 junior students. Absolute Zero Learning is a game for kids in 2nd Grade or under. To build this game we used Eclipse and Android Standalone SDK tools.</p>
            </details>
        </details>

        <details open>
            <summary>Work Experience</summary>

            <details open>
                <summary class="subheading">Fuze<span>Boston, M.A</span></summary>
                <details open>
                    <summary class="subSubheading">Esclation Engineer <span>October 2018 - Present</span></summary>
                    <ul>
                        <li>Work directly with customers and T2 engineers to create bug tickets.</li>
                        <li>Created a web app to simply tedious tasks</li>
                        <li>Work directly with developers and set expectations with customers.</li>
                        <li>Document newly discovered solutions.</li>
                    </ul>
                </details>
                <details>
                    <summary class="subSubheading">Support Engineer <span>September 2016 – October 2018</span></summary>
                    <ul>
                        <li>Work directly with customers through phone, video call, email, and case management system to resolve issues
                            and fulfill requests</li>
                        <li>Created a selenium script to help with workflow using Java and selenium</li>
                        <li>Managed and prioritized multiple issues in parallel while meeting SLA and updating customers</li>
                        <li>Document and escalate more complex issues to higher level technical teams</li>
                    </ul>
                </details>
            </details>

            <details open>
                <summary class="subheading">MFS Investment Management<span>Boston, M.A</span></summary>
                <details>
                    <summary class="subSubheading">Automation Quality Assurance Co-op<span>August 2015 - December 2015</span></summary>
                    <ul>
                        <li>Tested existing automated test scripts for multiple applications</li>
                        <li>Created new test scripts using Selenium and Lean Functioning Tool Framework</li>
                        <li>Organized and reported test results in Application lifecycle Management(ALM)</li>
                        <li>Helped building the Selenium and Lean Functioning Tool Framework</li>
                    </ul>
                </details>
            </details>

            <details open>
                <summary class="subheading">Brightcove Inc.<span>Boston, M.A</span></summary>
                <details>
                    <summary class="subSubheading">Technical Support Engineer Co-op<span>January 2015 – April 2015</span></summary>
                    <ul>
                        <li>Handled and solved customer cases through email and Live chat</li>
                        <li>Created and documented Google Sheets Scripts to assist the Support Team.</li>
                        <li>Prioritized and Multi-tasked urgent cases or when necessary</li>
                        <li>Worked with a team of co-op engineers on special projects. </li>
                    </ul>
                </details>
            </details>

            <details open>
                <summary class="subheading">CVS/pharmacy<span>Boston, M.A</span></summary>
                <details>
                    <summary class="subSubheading">Supervisor<span>September 2012 – December 2016</span></summary>
                    <ul>
                        <li>Daily cash control procedures including deposit preparation</li>
                        <li>Manage and lead current and new employees</li>
                        <li>Ensure customer satisfaction and resolve customer complaints</li>
                        <li>Maintain store appearance</li>
                    </ul>
                </details>
            </details>

        </details>
    </main>
</template>

<script>
    export default {
        data () {
            return {
                greeting: 'Resume',
                footer: "2020 Jay Singh",
                print: 'Printed from jaysingh.net'
            };
        }
    }
</script>

<style src="../css/main.css"></style>
