import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import ProjectPageStyle from './ProjectPage.module.css';
import { Link } from 'react-router-dom';

function Microprocessor() {
    return (
        <div className={ProjectPageStyle.page}>
            <Header />
            <main className={ProjectPageStyle.main}>
                <Link to="/projects" className={ProjectPageStyle.backLink}>
                    back to projects
                </Link>
                
                <h1 className={ProjectPageStyle.title}>8-bit microprocessor</h1>
                <p className={ProjectPageStyle.subtitle}>
                    cpu architected and implemented from scratch | 12.2023
                </p>
                
                <div className={ProjectPageStyle.content}>
                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>overview</h2>
                        <p>
                            An 8-bit microprocessor architected and implemented from scratch using Intel Quartus 
                            and deployed on an FPGA board with live hardware I/O via board switches. This project 
                            demonstrates how computers compute at the most fundamental hardware level.
                        </p>
                    </section>

                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>implementation</h2>
                        <p>
                            Built using <strong>Verilog/VHDL in Intel Quartus</strong>, the processor was 
                            synthesized and deployed on an <strong>FPGA development board</strong>. Every 
                            component was engineered from primitive logic gates, providing deep insight into 
                            how processors function at the hardware level.
                        </p>
                        <p>
                            Core processor components include the <strong>Arithmetic Logic Unit (ALU)</strong> for 
                            computational operations, a set of <strong> SISO registers</strong> for fast data access, 
                            <strong> ROM</strong> for instruction storage, and a custom <strong>instruction set 
                            architecture (ISA)</strong> designed specifically for this processor.
                        </p>
                        <p>
                            The processor features live hardware I/O through physical board switches, allowing 
                            real-time interaction and testing. Operation was verified through comprehensive 
                            <strong> waveform and signal analysis</strong>, ensuring accurate and synchronized 
                            outputs across all processor components.
                        </p>
                    </section>

                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>key features</h2>
                        <ul className={ProjectPageStyle.list}>
                            <li>8-bit processor architecture built from scratch</li>
                            <li>Custom instruction set architecture (ISA)</li>
                            <li>ALU supporting arithmetic and logic operations</li>
                            <li>Register file and ROM for data/instruction storage</li>
                            <li>Live hardware I/O via FPGA board switches</li>
                            <li>Waveform analysis for signal verification</li>
                            <li>Synthesized and deployed on real FPGA hardware</li>
                        </ul>
                    </section>

                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>process</h2>
                        <p>
                            The design process involved careful planning of the instruction set, designing the 
                            datapath and control logic, implementing each component using primitive logic gates, 
                            and extensive testing through simulation. After verification in simulation, the design 
                            was synthesized and programmed onto the FPGA board for real-world testing with 
                            physical hardware.
                        </p>
                    </section>

                    <section className={ProjectPageStyle.section}>
                        <h2 className={ProjectPageStyle.sectionTitle}>tools</h2>
                        <div className={ProjectPageStyle.tags}>
                            <span>Verilog/VHDL</span>
                            <span>Intel Quartus</span>
                            <span>FPGA Board</span>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Microprocessor;
