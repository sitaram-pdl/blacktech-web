import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import Card from "./Component/Card";
import Job from "./style";
import jobs from "./data";

const FilterButton = ({ name, handleSetTag, tagActive, children }) => {
  return (
    <li
      className={`btn-reset ${tagActive === name ? "active" : ""}`}
      onClick={() => handleSetTag(name)}
    >
      {children}
    </li>
  );
};
export default function JobSection() {
  const router = useRouter();
  const [tag, setTag] = React.useState("all");
  const [filteredJobs, setFilteredJobs] = React.useState([]);

  React.useEffect(() => {
    tag === "all"
      ? setFilteredJobs(jobs)
      : setFilteredJobs(
          jobs.filter((job) => job.tagId.find((item) => item === tag))
        );
  }, [tag]);
  return (
    <Job>
      <Container>
        <Row className="justify-content-center">
          <Col xs="12" className="col-lg-3 col-md-4 col-xs-8">
            <Job.Filter>
              <Job.Title as="h3">Department</Job.Title>
              <Job.FilterMenu as="ul">
                <FilterButton
                  className="is-checked"
                  name="all"
                  tagActive={tag}
                  handleSetTag={setTag}
                >
                  All
                </FilterButton>
                <FilterButton
                  name="Research and Development"
                  tagActive={tag}
                  handleSetTag={setTag}
                >
                  Research and Development
                  
                </FilterButton>
                <FilterButton
                  name="Quality Assurance"
                  tagActive={tag}
                  handleSetTag={setTag}
                >
                 Quality Assurance
                </FilterButton>
                <FilterButton
                  name="Sales and Marketing"
                  tagActive={tag}
                  handleSetTag={setTag}
                >
                Sales and Marketing
                </FilterButton>
                <FilterButton
                  name="Training"
                  tagActive={tag}
                  handleSetTag={setTag}
                >
                 Internship and Training

                </FilterButton>
                <FilterButton
                  name="Technical (or Customer) Support"
                  tagActive={tag}
                  handleSetTag={setTag}
                >
                 Technical (or Customer) Support

                </FilterButton>
              </Job.FilterMenu>
            </Job.Filter>
          </Col>
          <Col xs="12" className="col-xl-8 offset-xl-1 col-lg-9 col-md-8">
            <Job.Tab>
              <Row className="justify-content-center justify-content-md-start">
                {filteredJobs.map(
                  ({ title, address, hours, time, salary }, index) => {
                    return (
                      <Col
                        className="col-lg-6 col-md-12 col-xs-8"
                        key={"jobId" + index}
                       
                      >
                        <Card
                          title={title}
                          address={address}
                          hours={hours}
                          time={time}
                          salary={salary}
                        />
                      </Col>
                    );
                  }
                )}
              </Row>
            </Job.Tab>
          </Col>
        </Row>
      </Container>
    </Job>
  );
}
