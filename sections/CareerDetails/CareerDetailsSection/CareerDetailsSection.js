import React from "react"
import { Container, Row, Col} from "react-bootstrap"
import { Link } from "~components";
import CareerCard from "./Components/Card"
import Career from "./style"
import { useRouter } from "next/router";
import styles from './styles.module.css'
export default function CareerDetailsSection(){
  const router = useRouter();

  const data1 = [
    {    Projectname: "Graphic Designer",
      AboutJob1:"We are on the lookout for a Creative Graphic Designer. Someone awesome and creative. You’ll be the one to shape the visual aspects of websites, product packaging, exhibitions, and more.      ",
      AboutJob2:"Your graphics should capture the attention of those who see them and communicate the right message. For this, you need to have a creative flair and a strong ability to translate requirements into design. If you can communicate well and work methodically as part of a team, we’d like to meet you.      ",
      Responsibility:[
      {name:"Study design briefs and determine requirements"},
      {name:"Schedule projects and define budget constraints"},
      { name: "Conceptualize visuals based on requirements "},
      { name: "Prepare rough drafts and present ideas "},
      { name: "Develop illustrations, logos, and other designs using software or by hand"},
      {name:"Use the appropriate colors and layouts for each graphic"},
      { name:"Work with copywriters and creative director to produce the final design"},
      { name:"Ensure final graphics and layouts are visually appealing and on-brand"}
      ],
      skills:[
        {name:'Minimum 2 years proven experience in graphic designing'},
        {name:'UI/UX Designer'},
        {name:'Good Knowledge in Figma, XD'},
        {name:'Ability to work methodically and meet deadlines'},
        {name:'Degree in Design, Fine Arts or related field is a plus'},

      ] ,
    
     apply:"To apply you can email us your CV or resume at hello@blacktech.com.np with the subject as “Graphic Designer”. ",
     
    },
    {    Projectname: "Flutter Developer",
      AboutJob1:"We are on the lookout for a Creative Graphic Designer. Someone awesome and creative. You’ll be the one to shape the visual aspects of websites, product packaging, exhibitions, and more.      ",
      AboutJob2:"Your graphics should capture the attention of those who see them and communicate the right message. For this, you need to have a creative flair and a strong ability to translate requirements into design. If you can communicate well and work methodically as part of a team, we’d like to meet you.      ",
      Responsibility:[
     {name:"Design and develop high-volume, low-latency applications for mission-critical systems, delivering high-availability and performance"},
     {name:"Contribute to all phases of the development lifecycle: concept, design, build, deploy, test, release to app stores, and support"}
     ,{name:"Diagnose performance issues, fix bugs (including crashes and ANRs) to increase the functionality of the application"},
     {name:"Write well designed, testable, efficient code"},
     {name:"Ensure designs are in compliance with specifications"},
     {name:"Prepare and produce releases of software components"},
     {name:"Support continuous improvement by investigating alternatives and technologies and presenting these for architectural review"},
     {name:"Collaborate with team members (product managers, developers, designers) to brainstorm about new features and functionalities."}
      ],
      skills:[
        {name:"Bachelor's degree or equivalent experience in Computer Science or related field"},
        {name:"Min 1 year experience in Mobile app development"},
        {name:"Should be skillful with REST API"},
        {name:"Should be familiar with Designs patterns"}

      ] ,
    
     apply:"To apply you can email us your CV or resume at hello@blacktech.com.np with the subject as “Graphic Designer”. ",
     
    },{    Projectname: "Senior Backend Developer",
    AboutJob1:"We are on the lookout for a Senior Backend Developer. Someone who is responsible for building the structure of a software application.",
    AboutJob2:"If you have excellent programming skills and a passion for developing applications or improving existing ones, we would like to meet you. As a Back-end developer, you’ll work closely with our engineers to ensure system consistency and improve user experience. ",
    Responsibility:[
    {name:"Participate in the entire application lifecycle, focusing on coding and debugging"},
    {name:"Write clean code to develop functional web applications"},
    { name: "Troubleshoot and debug applications"},
    { name: "Perform UI tests to optimize performance"},
    { name: "Manage cutting-edge technologies to improve legacy applications"},
    {name:"Collaborate with Front-end developers to integrate user-facing elements with server-side logic"},
    { name:"Provide training and support to internal teams"},
    { name:"Build reusable code and libraries for future use"},
    {name:"Follow emerging technologies"}
    ],
    skills:[
      {name:"Bachelor's degree in computer science, computer engineering or a related field."},
      {name:"Minimum 2 years experience"},
      {name:'Good Knowledge in Figma, XD'},
      {name:"Should be familiar with express API"},
      {name:"Node.js & Mongoose ORM"},
      {name:"Tam work skills with a problem-solving attitude"}

    ] ,
  
   apply:"To apply you can email us your CV or resume at hello@blacktech.com.np with the subject as “Graphic Designer”. ",
   
  },{    Projectname: "Senior React Developer",
  AboutJob1:"We are on the lookout for a Senior React Developer. Someone who is excellent in building and architecture reacts to new native applications with clean code.",
  AboutJob2:"You will be responsible for developing and implementing user interface components using React.js concepts and workflows. To ensure success as a react.js developer, you should have in-depth knowledge of JavaScript and React concepts, excellent front-end coding skills, and a good understanding of progressive web applications",
  Responsibility:[
  {name:"Meeting with the development team to discuss user interface ideas and applications."},
  {name:"Reviewing application requirements and interface designs."},
  { name: "Identifying web-based user interactions."},
  { name: "Developing and implementing highly responsive user interface components using react concepts."},
  { name: "Writing application interface codes using JavaScript following react.js workflows."},
  {name:"Troubleshooting interface software and debugging application codes."},
  { name:"Developing and implementing front-end architecture to support user interface concepts."},
  { name:"Monitoring and improving front-end performance."},
  {name:"Documenting application changes and developing updates"}
  ],
  skills:[
    {name:"Bachelor's degree in computer science, computer engineering, or a related field."},
    {name:"Capable of handling Complex CSS &"},
    {name:"Custom Hooks"},
    {name:"Minimum 3 years experience in React"},
    {name:"Should be skillful with REST API"},

  ] ,

 apply:"To apply you can email us your CV or resume at hello@blacktech.com.np with the subject as “Graphic Designer”. ",
 
},{    Projectname: "Quality Assurance Engineer",
AboutJob1:"We are on the lookout for Quality Assurance Engineer. Someone who is able to create all the testing and automation frameworks as required for the projects and identify and record bugs.",
AboutJob2:'The QA technician role plays an important part in our company’s product development process. Our ideal candidate will be responsible for conducting tests before product launches to ensure software runs smoothly and meets client needs while being cost-effective. If you hold an engineering background and enjoy providing end-to-end solutions to software quality problems, we’d like to meet you.',
Responsibility:[
{name:"Review requirements, specifications, and technical design documents to provide timely and meaningful feedback"},
{name:"Create detailed, comprehensive, and well-structured test plans and test cases"},
{ name: "Estimate, prioritize, plan and coordinate testing activities"},
{ name: "Design, develop and execute automation scripts using open source tools"},
{ name: "Identify, record, document thoroughly and track bugs"},
{name:"Perform through regression testing when bugs are resolved"},
{ name:"Develop and apply testing processes for new and existing products to meet client needs"},
{name:'Investigate the causes of non-conforming software and train users to implement solutions'},
{ name:"Monitor debugging process results"},
{ name:"Investigate the causes of non-conforming software and train users to implement solutions"}
],
skills:[
  {name:"Bachelor's degree or equivalent experience in computer science, engineering or related field  "},
{name:"Strong knowledge of software QA methodologies, tools and processes."},
{name:"Min 1 year experience in Mobile app development"},
{name:"Should be skillful with REST API"},
{name:"Should be familiar with Designs patterns"}] ,

apply:"To apply you can email us your CV or resume at hello@blacktech.com.np with the subject as “Graphic Designer”. ",

},
   
    
  
  ];
  console.log(router.query.careerdetails);

  const [data] = data1.filter((datas) => datas.Projectname === router.query.careerdetails);
  console.log(data.Projectname);
return(
<Career backgroundColor="#f3f4f6">
  <Container>
    <Row className="justify-content-center">
      <Col className="col-xl-8 col-lg-10">
        <CareerCard name={data.Projectname}/>
      </Col>
    </Row>
    <Row className="row justify-content-center">
      <Col className="col-xl-8 col-lg-10">
        <Career.Wrapper>
          <Career.ContentBlock>
            <Career.Title fontColor="#262729">About the job</Career.Title>
            <Career.Text>{data.AboutJob1}</Career.Text>
            <Career.Text>{data.AboutJob2}</Career.Text>
          </Career.ContentBlock>
          <Career.ContentBlock>
            <Career.Title fontColor="#262729">Responsibilities</Career.Title>
            {/* <Career.Text>A Senior Data Engineer provides technical and delivery leadership
              for a team of developers working on data integration and processing projects. This role will work with
              stakeholders and other developers to design and implement technical data solutions for the business in a
              way that balances quality, maintainability cost, and time.</Career.Text> */}
            <Career.List>
              {data.Responsibility.map((dat)=>(
                <Career.ListItem>{dat.name}</Career.ListItem>
              ))}
            </Career.List>
          </Career.ContentBlock>
          <Career.ContentBlock>
            <Career.Title fontColor="#262729">Skills &amp; Qualification</Career.Title>
            <Career.List>
            {data.skills.map((dat)=>(
                <Career.ListItem>{dat.name}</Career.ListItem>
              ))}
            </Career.List>
          </Career.ContentBlock>
          {/* <Career.ContentBlock>
            <Career.Title fontColor="#262729">Whats in it for you</Career.Title>
            <Career.List>
              <Career.ListItem>A remote friendly office with flexible hours - for this role we will consider all applications from those based in Canada with the option to work from our Vancouver office.</Career.ListItem>
              <Career.ListItem>4 weeks vacation plus Christmas Holiday Closure - you"re entitled to the week of Christmas off with pay through to and including Jan 1st.</Career.ListItem>
              <Career.ListItem>12 Personal Wellness Days This includes: Sick days, moving days, personal days, etc
              </Career.ListItem>
              <Career.ListItem>One day every 2 weeks of dedicated professional development time</Career.ListItem>
              <Career.ListItem>A paid day off for your birthday</Career.ListItem>
            </Career.List>
          </Career.ContentBlock> */}
          <Career.ContentBlock>
            <Career.Title fontColor="#262729">How to apply</Career.Title>
            <Career.Text mb="30px">To apply you can email us your CV or resume at hello@blacktech.com.np with the subject as  "{data.Projectname}". </Career.Text>
           <a href='mailto:hello@blacktech.com.np' target='_blank'> <div className={styles.button}> Apply for this position</div></a> 
          </Career.ContentBlock>
        </Career.Wrapper>
      </Col>
    </Row>
  </Container>
</Career>

)
}