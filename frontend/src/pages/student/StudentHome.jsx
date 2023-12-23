import React, { useEffect, useState } from "react";
import { Button, Box, Typography, TextField, Grid } from "@mui/material";
import MainLayout from "../../components/layout/MainLayout";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { findUser } from "../../utils/api/user";
import { findTopicOfStudent } from "../../utils/api/topic";

function StudentHome() {
  const [currentUser, setCurrentUser] = useState({});
  const [currentTopic, setCurrentTopic] = useState({});

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const id = JSON.parse(localStorage.getItem("user"))._id;
        const res = await findUser(id);
        setCurrentUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCurrentUser();
  }, []);

  useEffect(() => {
    const getCurrentTopic = async () => {
      try {
        const res = await findTopicOfStudent(currentUser?._id);
        setCurrentTopic(res.data);
      } catch (error) {}
    };
    currentUser && getCurrentTopic();
  }, [currentUser]);

  console.log(currentTopic);

  return (
    <MainLayout type="student">
      <Button fullWidth size="large" variant="contained">
        Quản lý đề tài
      </Button>
      <Box mt={4} sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 2 }}>
        {currentTopic ? (
          <>
            <Typography variant="subtitle2">
              Tên đề tài: {currentTopic?.title}
            </Typography>
            <Typography variant="subtitle2" mt={2}>
              Mô tả đề tài: {currentTopic?.description}
            </Typography>
            <Box mt={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Timeline position="alternate">
                <TimelineItem >
                  <TimelineOppositeContent color="textSecondary">
                    23/12/2023
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Giai đoạn 1</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box mt={4}>
                          <Typography
                            variant="subtitle1"
                            textAlign={"center"}
                            fontWeight={"bold"}
                          >
                            Báo cáo tiến độ
                          </Typography>
                          <Grid container mt={4}>
                            <Grid item xs={3}>
                              <Typography variant="subtitle2">
                                Nộp báo cáo:
                              </Typography>
                            </Grid>
                            <Grid item xs={8}>
                              <TextField type="file" size="small" fullWidth />
                            </Grid>
                          </Grid>
                          <Grid container mt={4}>
                            <Grid item xs={3}>
                              <Typography variant="subtitle2">
                                Tiến độ:
                              </Typography>
                            </Grid>
                            <Grid item xs={8}>
                              <TextField size="small" fullWidth />
                            </Grid>
                          </Grid>
                          <Box
                            display={"flex"}
                            justifyContent={"center"}
                            mt={2}
                          >
                            <Button variant="contained" size="small">
                              Cập nhật
                            </Button>
                          </Box>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">
                    30/01/2023
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Giai đoạn 2</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box mt={4}>
                          <Typography
                            variant="subtitle1"
                            textAlign={"center"}
                            fontWeight={"bold"}
                          >
                            Báo cáo tiến độ
                          </Typography>
                          <Grid container mt={4}>
                            <Grid item xs={3}>
                              <Typography variant="subtitle2">
                                Nộp báo cáo:
                              </Typography>
                            </Grid>
                            <Grid item xs={8}>
                              <TextField type="file" size="small" fullWidth />
                            </Grid>
                          </Grid>
                          <Grid container mt={4}>
                            <Grid item xs={3}>
                              <Typography variant="subtitle2">
                                Tiến độ:
                              </Typography>
                            </Grid>
                            <Grid item xs={8}>
                              <TextField size="small" fullWidth />
                            </Grid>
                          </Grid>
                          <Box
                            display={"flex"}
                            justifyContent={"center"}
                            mt={2}
                          >
                            <Button variant="contained" size="small">
                              Cập nhật
                            </Button>
                          </Box>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                  <TimelineOppositeContent color="textSecondary">
                    30/03/2023
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>Giai đoạn 3</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Box mt={4}>
                          <Typography
                            variant="subtitle1"
                            textAlign={"center"}
                            fontWeight={"bold"}
                          >
                            Báo cáo tiến độ
                          </Typography>
                          <Grid container mt={4}>
                            <Grid item xs={3}>
                              <Typography variant="subtitle2">
                                Nộp báo cáo:
                              </Typography>
                            </Grid>
                            <Grid item xs={8}>
                              <TextField type="file" size="small" fullWidth />
                            </Grid>
                          </Grid>
                          <Grid container mt={4}>
                            <Grid item xs={3}>
                              <Typography variant="subtitle2">
                                Tiến độ:
                              </Typography>
                            </Grid>
                            <Grid item xs={8}>
                              <TextField size="small" fullWidth />
                            </Grid>
                          </Grid>
                          <Box
                            display={"flex"}
                            justifyContent={"center"}
                            mt={2}
                          >
                            <Button variant="contained" size="small">
                              Cập nhật
                            </Button>
                          </Box>
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </Box>
          </>
        ) : (
          <Box
            mt={4}
            display={"flex"}
            alignItems={"center"}
            gap={2}
            justifyContent={"center"}
            sx={{ cursor: "pointer" }}
          >
            <Typography variant="subtitle2">
              Hiện tại bạn chưa đăng kí đề tài nào
            </Typography>
            <Button variant="contained" size="small" href="/sub-topic">
              Đăng kí
            </Button>
          </Box>
        )}
      </Box>
    </MainLayout>
  );
}

export default StudentHome;