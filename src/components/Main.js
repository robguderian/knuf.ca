import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Visibility
} from 'semantic-ui-react'

const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Menu.Item as='a' active>Home</Menu.Item>
      <Menu.Item as='a'>Testimonials</Menu.Item>
      <Menu.Item as='a'>Company</Menu.Item>
      <Menu.Item as='a'>Contact</Menu.Item>
    </Container>
  </Menu>
)

export default class HomepageLayout extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })

  render() {
    const { visible } = this.state

    return (
      <div>
        { visible ? <FixedMenu /> : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
              <Menu.Item as='a' active>Home</Menu.Item>
              <Menu.Item as='a'>Testimonials</Menu.Item>
              <Menu.Item as='a'>Company</Menu.Item>
              <Menu.Item as='a'>Contact</Menu.Item>
              </Menu>
            </Container>

            <Container text>
              <Header
                as='h1'
                content='KNUF Plumbing and Heating'
                inverted
                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
              />
              <Header
                as='h2'
                content='Serving Southern Manitoba.'
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
            </Container>
          </Segment>
        </Visibility>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>Locally owned. Locally operated. We can help.</Header>
                <p style={{ fontSize: '1.33em' }}>
                  We provide plumbing and heating services for any size project. Whether you are a
                  homeowner with a minor leak, a homeowner with a major plumbing disaster, or a business owner
                  looking to expand. We have the tools, knowledge and can work with you to get the job done.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>Where we are</Header>
                <p style={{ fontSize: '1.33em' }}>
                We proudly serving Southern Manitoba with our servies. Many of our clients live in such places as
                Steinbach, Mitchell, La Broquerie,
                Grunthal, Kleefeld, Blumenort, St. Anne, Marchand, and Richer. We have clients well beyond this area,
                from the border, to the Whiteshell to Winnipeg.
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                  bordered
                  rounded
                  size='large'
                  src='/assets/images/wireframe/white-image.png'
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>"I had major water leaking problems, and KNUF came immediately and solved my problem"</Header>
                <p style={{ fontSize: '1.33em' }}>- Kleefeld resident</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>"I've called KNUF for most of my projects. My washroom reno, replacing my furnace, and adding A/C. I'll definitely call again for the next one!"</Header>
                <p style={{ fontSize: '1.33em' }}>
                  - Steinbach homeowner
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as='h3' style={{ fontSize: '2em' }}>Call us for your Barn projects</Header>
            <p style={{ fontSize: '1.33em' }}>
              We are well-versed in commercial barn heating installation and retrofitting. Contact us for quotes
              on your projects.
            </p>

            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href='#'>Contact</a>
            </Divider>

            <Header as='h3' style={{ fontSize: '2em' }}>How to get a hold of us</Header>
            <p style={{ fontSize: '1.33em' }}>
              Get a hold of us at 204-371-6645.
            </p>
            <Button as='a' size='large'>Or click here to send an email</Button>
          </Container>
        </Segment>

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>Home Plumbing and Heating</List.Item>
                    <List.Item as='a'>Business Plumbing and Heating</List.Item>
                    <List.Item as='a'>Commercial Install and Retrofit</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Footer Header</Header>
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}
