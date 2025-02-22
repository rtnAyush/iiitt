import React from "react";
import "./index.css";
import {
  Typography,
  Grid,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableContainer,
  TableRow,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer";

function Admission_ug() {
  const createStyles = makeStyles({
    themeText: {
      color: "#2e8b57",
      fontSize: 28,
      fontWeight: "500",
    },
    container: {
      padding: "1rem 1rem",
    },
    link: {
      textDecoration: "none",
      display: "block",
      paddingTop: "1rem",
      fontWeight: "500",
      width: "auto",
      color: "#2e8b57",
      "&:hover": {
        textDecoration: "underline",
        color: "blueviolet",
      },
    },
  });
  const classes = createStyles();
  return (
    <div>
      <Navbar />
      <Grid container className={classes.container}>
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10}>
          <Typography
            variant="h3"
            component="h3"
            gutterBottom
            className={classes.themeText}
          >
            <Box component="span">
              B.Tech Admission - Online Admission Process 2021
            </Box>
          </Typography>
          <h3 className="utility_margin-1">
            There is no need to Report to the Institute in Person for Online
            Admission
          </h3>
          <a
            className={`${classes.link} utility_link`}
            href="http://www.iiitt.ac.in/downloads/admission/BTechReporting_details_2021-22-updated71221.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Click here for Online Reporting Details
          </a>
          <a
            className={`${classes.link} utility-mrgin_2`}
            href="https://josaa.nic.in/webinfo/File/ViewFile?FileId=18&LangId=P"
            target="_blank"
            rel="noreferrer"
          >
            JoSAA_Important Instructions for candidates from JoSAA 6th round
            onwards
          </a>
          <p>
            Candidates who have secured their seat by paying partial admission
            fee during JoSAA Rounds are required to do online reporting to the
            allotted institute from{" "}
            <strong>
              7th December 2021 (Tuesday) (10:00 hrs) to 13th December 2021
              (17:00 hrs)
            </strong>
          </p>
          <a
            className={`${classes.link}`}
            href="https://csab.nic.in/WebInfo/File/ViewFile?FileId=3&LangId=P"
            target="_blank"
            rel="noreferrer"
          >
            Schedule of CSAB-2021 Special Rounds
          </a>
          <div>
            <h4 className="utility_margin-h4">
              For details/changes in the schedule (JoSAA), visit:
            </h4>
            <ul className="utility-bullet">
              <li>
                <a
                  className={`${classes.link}`}
                  href="https://josaa.nic.in/webinfo/File/ViewFile?FileId=2&LangId=P"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://josaa.nic.in/webinfo/File/ViewFile?FileId=2&LangId=P
                </a>
              </li>
              <li>
                <a
                  className={`${classes.link}`}
                  href="https://josaa.nic.in/webinfo/Page/Page?PageId=1&LangId="
                  target="_blank"
                  rel="noreferrer"
                >
                  https://josaa.nic.in/webinfo/Page/Page?PageId=1&LangId=
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="utility_margin-h4">
              For details / Business rules and schedule, (CSAB), visit:
            </h4>
            <ul className="utility-bullet">
              <li>
                <a
                  className={`${classes.link}`}
                  href="https://csab.nic.in/WebInfo/Page/Page?PageId=1&LangId=P"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://csab.nic.in/WebInfo/Page/Page?PageId=1&LangId=P
                </a>
              </li>
            </ul>
          </div>
          <hr className="utility-hr" />
          <h2>List of Undergraduate Programs</h2>
          <div>
            <p className="utility-mrgin_2">
              IIIT Tiruchirappalli offers the following two
              <strong>Undergraduate Programs :</strong>
            </p>
            <ul className="utility-bullet">
              <li>
                <h4>
                  Computer Science and Engineering (4 years, Bachelor of
                  Technology)
                </h4>
              </li>
              <li>
                <h4>
                  Electronics and Communication Engineering (4 years, Bachelor
                  of Technology)
                </h4>
              </li>
            </ul>
          </div>
          <hr className="utility-hr" />
          <h2>Fee Structure</h2>
          <ul className="utility-bullet">
            <li>
              <a
                className={`${classes.link}`}
                href="http://www.iiitt.ac.in/downloads/admission/FeeStructure2021-22.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Fee Structure 2021
              </a>
            </li>
            <li>
              <a
                className={`${classes.link}`}
                href="http://www.iiitt.ac.in/downloads/admission/FeeRefundStructure2021.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Fee Refund Structure 2021
              </a>
            </li>
          </ul>
          <hr className="utility-hr" />
          <a className={`${classes.link}`} href="/curriculum" target="_blank">
            <h2>Curriculum and Syllabus</h2>
          </a>
          <hr className="utility-hr" />
          <h2>Forms</h2>
          <ul className="utility-bullet">
            <li>
              <a
                className={`${classes.link}`}
                href="http://www.iiitt.ac.in/downloads/admission/undertaking_2021-22.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Undertaking form
              </a>
            </li>
            <li>
              <a
                className={`${classes.link}`}
                href="http://www.iiitt.ac.in/downloads/admission/Admission_cancellation_form2020-21.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Admission Cancellation Form
              </a>
            </li>
          </ul>
          <hr className="utility-hr" />
          <h2>Opening and Closing Rank</h2>
          <ul className="utility-bullet">
            <li>
              <a
                className={`${classes.link}`}
                href="http://www.iiitt.ac.in/downloads/admission/Opening_and_Closing_Rank2020.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Opening/Closing Rank of IIIT Tiruchirappalli, JoSAA 2020
              </a>
            </li>
            <li>
              <a
                className={`${classes.link}`}
                href="http://www.iiitt.ac.in/downloads/admission/OpeningandClosingRank2020-21.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Opening/Closing Rank of IIIT Tiruchirappalli, JoSAA 2019
              </a>
            </li>
          </ul>
          <hr className="utility-hr" />
          <h2>Anti Ragging Committee</h2>
          <a
            className={`${classes.link}`}
            href="http://www.iiitt.ac.in/downloads/admission/AntiRaggingCommittee2020-21.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Anti-Ragging Committee
          </a>
          <hr className="utility-hr" />
          <section className={classes.sectionPadding}>
            <p className="utility-mrgin_2">
              The admission to Undergraduate Programs is done through JEE Mains.
              The JEE-Mains qualified candidates are admitted to UG program
              through Centralized Seat Allocation Board (CSAB) and Joint Seat
              Allocation Authority (JoSAA) following the reservation policy of
              Government of India.
            </p>
            <br />
            <Typography variant="h5" className={classes.themeText}>
              <Box component="span" fontWeight="fontWeightBold">
                JEE Main 2020
              </Box>
            </Typography>
            <br />
            <Box fontSize="1.1rem" className={classes.sectionText}>
              <Typography>
                <Box component="span" fontSize="1.2em">
                  The Ministry of Human Resource Development, Government of
                  India has notified following two changes in the JEE pattern
                  for 2020:
                </Box>
              </Typography>

              <ol
                style={{
                  lineHeight: "1.5",
                  paddingTop: "0.7rem",
                  listStyleType: "none",
                }}
              >
                <li>
                  The Ministry of Education [erstwhile Ministry of Human
                  Resources Development (MHRD)], Government of India (GOI) has
                  established National Testing Agency (NTA) as an independent
                  autonomous and self-sustained premier testing organization
                  under Society Registration Act 1860 for conducting efficient,
                  transparent and international standards tests in order to
                  assess the competency of candidates for admissions to premier
                  higher education institutions.
                </li>
                <br />
                <li>
                  The Department of Higher Education, Ministry of Human Resource
                  Development, Government of India has entrusted the
                  responsibility of conducting Joint Entrance Examination JEE
                  (Main) to the NTA from 2019 onwards.
                </li>
                <br />
                <li>
                  Admission criteria to Undergraduate Engineering Programs at
                  NITs, IIITs, other Centrally Funded Technical Institutions
                  (CFTI), Institutions funded by participating State
                  Governments, and other Institutions shall include the
                  performance in the class 12/equivalent qualifying Examination
                  and in the Joint Entrance Examination, JEE (Main). The (B. E.
                  /B. Tech.) of JEE (Main) will also be an eligibility test for
                  the JEE (Advanced), which the candidate has to take if he/she
                  is aspiring for admission to the undergraduate programs
                  offered by the Indian Institute of Technology (IITs).
                </li>
              </ol>
              <a href="https://jeemain.nic.in" className={` ${classes.link}`}>
                Visit website of JEE Main
              </a>
            </Box>
          </section>
          <hr className="utility-hr" />
          <section className={classes.sectionPadding}>
            <Typography variant="h5" className={classes.themeText}>
              <Box component="span" fontWeight="fontWeightBold">
                JoSAA 2019
              </Box>
            </Typography>
            <br />
            <Box fontSize="1.1rem" className={classes.sectionText}>
              <Typography>
                <Box component="span" fontSize="1.2em">
                  The Joint Seat Allocation Authority (JoSAA) 2020 has been set
                  up by the Ministry of Education [erstwhile Ministry of Human
                  Resources Development (MHRD)] to manage and regulate the joint
                  seat allocation for admissions to 110 institutes for the
                  academic year 2020-21. This includes 23 IITs, 31 NITs, IIEST
                  Shibpur, 26 IIITs and 29 Other-Government Funded Technical
                  Institutes (Other-GFTIs). Admission to all the academic
                  programs offered by these Institutes will be made through a
                  single platform.
                </Box>
              </Typography>
              <br />
              <TableContainer component={Paper}>
                <Table>
                  <TableHead className={classes.tableHead}>
                    <TableRow>
                      <TableCell className={classes.th} align="center">
                        Qualifying Examination
                      </TableCell>
                      <TableCell className={classes.th} align="center">
                        Admitting Institutes
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell className={classes.td} align="center">
                        JEE (Advanced) 2020
                      </TableCell>
                      <TableCell className={classes.td} align="center">
                        IITs
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.td} align="center">
                        JEE (Main) 2020 B.E./B.Tech.
                      </TableCell>
                      <TableCell
                        rowSpan="3"
                        className={classes.td}
                        align="center"
                      >
                        NITs, IIEST, IIITs (Triple-I-Ts) and Other-GFTIs
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.td} align="center">
                        JEE (Main) 2020 B.Arch.
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.td} align="center">
                        JEE (Main) 2020 B.Planning
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <a href="https://josaa.nic.in" className={`${classes.link}`}>
                Visit website of JoSAA
              </a>
              <a href="https://josaa.nic.in" className={` ${classes.link}`}>
                View IIIT Trichy on JoSAA
              </a>
            </Box>
          </section>
          <hr className="utility-hr" />
          <section className={classes.sectionPadding}>
            <Typography variant="h5" className={classes.themeText}>
              <Box component="span" fontWeight="fontWeightBold">
                Central Seat Allocation Board (CSAB)
              </Box>
            </Typography>
            <Box fontSize="1.1rem" className={classes.sectionText}>
              <ol
                className="utility-bullet"
                style={{ lineHeight: "1.5", paddingTop: "0.7rem" }}
              >
                <li style={{ marginLeft: "1.3rem" }}>
                  The Ministry of Human Resource Development, Government of
                  India took a policy decision in 2002 to conduct an All India
                  Engineering Entrance Examination (AIEEE) annually, doing away
                  with many of the large number of entrance examinations that
                  were being conducted till then by various institutes in the
                  country for admission to undergraduate degree programmes in
                  the disciplines of Engineering/Technology and
                  Architecture/Planning. This initiative has been widely
                  accepted and appreciated.
                </li>
                <li style={{ marginLeft: "1.3rem" }}>
                  A Central Counselling Board (CCB) constituted by the Govt. of
                  India coordinated admissions to UG degree programmes in
                  Engineering, Technology and Architecture in respect of
                  selected institutes till 2012. From 2013 onwards, CCB and
                  AIEEE have been renamed as Central Seat Allocation Board
                  (CSAB) and JEE (Main) respectively.
                </li>
              </ol>
              <div>
                <p>For Further Details, Please visit:</p>
                <a href="https://csab.nic.in/" className={` ${classes.link}`}>
                  https://csab.nic.in/
                </a>
              </div>
            </Box>
          </section>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Admission_ug;
