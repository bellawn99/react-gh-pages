import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PersonOutline from '@material-ui/icons/PersonOutline';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Airplane from '@material-ui/icons/AirplanemodeActive';
import Hotel from '@material-ui/icons/LocalHotel';
import Train from '@material-ui/icons/Train';
import Mobil from '@material-ui/icons/TimeToLeave';
import Tiket from '@material-ui/icons/LocalActivity';
import Medun from '@material-ui/icons/ArrowDropDown';

const styles = theme => ({
    root: {
      width: '100%',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    
    
    sectionDesktop: {
      display: 'none',
      width:'30%',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  });

  class Navbar extends React.Component {
    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
      };
    
      handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
      };
    
      handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
      };
    
      handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
      };
  
    render() {
      const { anchorEl, mobileMoreAnchorEl } = this.state;
      const { classes } = this.props;
      const isMenuOpen = Boolean(anchorEl);
      const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
      const renderMenu = (
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMenuOpen}
          onClose={this.handleMenuClose}
        >
          <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
        </Menu>
      );
  
      const renderMobileMenu = (
        <Menu
          anchorEl={mobileMoreAnchorEl}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={isMobileMenuOpen}
          onClose={this.handleMenuClose}
        >
          <MenuItem onClick={this.handleMobileMenuClose}>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
          <MenuItem onClick={this.handleMobileMenuClose}>
            <IconButton color="inherit">
              <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
          <MenuItem onClick={this.handleProfileMenuOpen}>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </Menu>
      );
  
      return (
        <div className={classes.root}>
          <AppBar position="fixed" color="white" min-width="100%">
            <Toolbar>
              {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                <MenuIcon />
              </IconButton> */}
              <Typography className={classes.root} variant="h6" color="inherit" noWrap>
                <a href="#"><img src="https://static.tiket.photos/image/upload/v1540373512/home/2018/10/24/8a3ea7a4-882d-4784-b3ac-6ab3436c00535cb9e05af73081ae469edb97e6ba6bf8.svg"></img></a>
              </Typography>
              {/* <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div> */}
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                {/* <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton color="inherit">
                  <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton> */} 
                
                <Medun/> | 
                Cek Order |
                {/* <IconButton
                  aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleProfileMenuOpen}
                  color="inherit"
                >
                 </IconButton>   */}
                  <PersonOutline/>
                Login
              </div>
              {/* <div className={classes.sectionMobile}>
                <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                  <MoreIcon />
                </IconButton>
              </div> */}
              
            </Toolbar>
            <Toolbar>
              <div className={classes.root}>
             
            <a href="#"><Airplane className="miring warna"/>Pesawat &nbsp;&nbsp;</a>&nbsp;&nbsp;&nbsp;
  
            <a href="#"><Hotel className="warna"/>Hotel&nbsp;&nbsp;</a>&nbsp;&nbsp;&nbsp;
            
            <a href="#"><Train className="warna"/>Kereta Api&nbsp;&nbsp;</a>&nbsp;&nbsp;&nbsp;
  
            <a href="#"><Mobil className="warna"/> Sewa Mobil&nbsp;&nbsp;</a>&nbsp;&nbsp;&nbsp;
  
            <a href="#"><Tiket className="miringlagi warna"/> Entertainment&nbsp;&nbsp;</a></div>
              
            <div className={classes.grow} />
              <div className={classes.sectionDesktop}> 
                {/* <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton color="inherit">
                  <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton> */} Promo | 
                {/* <IconButton
                  aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleProfileMenuOpen}
                  color="inherit"
                >
                 </IconButton>   */}
                  
                 TIX Point
              </div>
            </Toolbar>
          </AppBar>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          
          {renderMenu}
          {renderMobileMenu}
        </div>
        
      );
    }
  }
  
  
  
  Navbar.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Navbar);
  