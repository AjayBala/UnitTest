import React,{Component} from 'react';
import './FooterDetail.css';
import { ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
import ShopSocial from './ShopSocial';

import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class FooterDetail extends Component {

   
    
    componentDidMount () {

        Events.scrollEvent.register('begin', function(to, element) {
          console.log("begin", arguments);
        });
    
        Events.scrollEvent.register('end', function(to, element) {
          console.log("end", arguments);
        });
    
        scrollSpy.update();
    
      }
      componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      }
      scrollToTop() {
        scroll.scrollToTop();
      }

  

    render(){



    return(
    <div className="mainContentWrap">    
    <div className="container">
            
        <div className="row iconrow">

            <div className="col-sm-3 textCenter">
                <div className="icon1 center-block"></div>
                <div><a href="javascript:(0)" onClick={()=> {window.location.hash="#Govtpage"}} className="textheader"><p>Designer <span className="arrowdown"> <i className="fa fa-angle-down" aria-hidden="true"></i></span></p></a></div>
            </div>
            <div className="col-sm-3 textCenter">
                <div className="icon1 center-block"></div>
                <div><a href="javascript:(0)" onClick={()=> {window.location.hash="#Govtpage"}} className="textheader"><p>Government <span className="arrowdown"> <i className="fa fa-angle-down" aria-hidden="true"></i></span></p></a></div>
            </div>
            <div className="col-sm-3 textCenter">
                <div className="icon1 center-block"></div>
                <div><a href="javascript:(0)" onClick={()=> {window.location.hash="#corporate"}} className="textheader"><p >Corporate <span className="arrowdown"> <i className="fa fa-angle-down" aria-hidden="true"></i></span></p></a></div>
            </div>
            <div className="col-sm-3 textCenter">
                <div className="icon1 center-block"></div>
                <div><a href="javascript:(0)" onClick={()=> {window.location.hash="#small"}} className="textheader"><p>Small Business <span className="arrowdown"> <i className="fa fa-angle-down" aria-hidden="true"></i></span></p></a></div>
            </div>
        </div>
           

        <div className="row">
            <div className="col-sm-12 col-md-6">
                <div className="specialBuy">
                <h1 className="titleBox_1"> SPECIAL BUY OF THE WEEK <span>Free Shipping</span></h1>
                <a href="/login" className='linkStyle_1'>Shop Now <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
            </div>
            <div className="col-sm-12 col-md-6">
                <div className="specialBuy">
                <h2 className="titleBox_1"> BULK ORDER DEALS <span>Discounts</span></h2>
                    <a href="/login" className='linkStyle_1'>See Offers <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                </div>
            </div>
            
        </div>

        <div className="row ProfBenefitsBase">
            <div className="col-md-12">
                <h3 className="corppara"><b>Professional Benefits & Services</b></h3>
                <div className="col-sm-12 col-md-5">
                    <div className="ProfBenefitsPoints">
                    <h3><b>Save Time & Money</b></h3>
                    <ul>
                        <li>Exclusive Overstock Professional Pricing</li>
                        <li>Bulk Order Discounts</li>
                        <li>Free Returns</li>
                        <li>Tax exempt purchasing</li>
                        <li>Multiple user checkout</li>
                        <li>Referral Discounts</li>
                    </ul>
                    </div>
                </div>
                <div className="col-sm-12 col-md-7">
                    <div className="ProfBenefitsBox"> image </div>
                </div>
            </div>
        </div>


        <div className="row keyfeatures1">
        
            <figure className="col-xs-12 col-sm-4 ">
                <div className="boxOutsdeWrap">
                    <span className="box1">icon </span>
                    <figcaption>Key Features </figcaption>
                </div>
            </figure>
            <figure className="col-xs-12 col-sm-4 ">
                <div className="boxOutsdeWrap">
                    <span className="box1">icon </span>
                    <figcaption>Key Features </figcaption>
                </div>
            </figure>
            <figure className="col-xs-12 col-sm-4 ">
                <div className="boxOutsdeWrap">
                    <span className="box1">icon </span>
                    <figcaption>Key Features </figcaption>
                </div>
            </figure>
            <figure className="col-xs-12 col-sm-4 ">
                <div className="boxOutsdeWrap">
                    <span className="box1">icon </span>
                    <figcaption>Key Features </figcaption>
                </div>
            </figure>
            <figure className="col-xs-12 col-sm-4 ">
                <div className="boxOutsdeWrap">
                    <span className="box1">icon </span>
                    <figcaption>Key Features </figcaption>
                </div>
            </figure>
            <figure className="col-xs-12 col-sm-4 ">
                <div className="boxOutsdeWrap">
                    <span className="box1">icon </span>
                    <figcaption>Key Features </figcaption>
                </div>
            </figure>
        </div>
           
            {/* santha code */}
        
        <div className="row ProfBenefitsBase">
            <div className="col-md-12">
                <h3 className="corppara"><b>why overstock profesional?</b></h3>
                <div className="col-sm-12 col-md-5">
                    <div className="ProfBenefitsPoints">
                    <h3><b>What makes us different</b></h3>
                    <ul className="listStyle_1 videoBoxList">
                        <li><p>-Summary of key points from video</p></li>
                        <li><p>-Summary of key points from video</p></li>
                        <li><p>-Summary of key points from video</p></li>
                    </ul>
                    </div>
                </div>
                <div className="col-sm-12 col-md-7">
                    <div className="ProfBenefitsBox  videoBoxWrap"> Video </div>
                </div>
            </div>
        </div>
        

        <div className="row ProfBenefitsBase" id="Govtpage">
            
                <h3 className="corppara"><b> Solutions for Government Buyers </b></h3>
                <div className="col-sm-12 col-md-12">
                    <div className="ProfBenefitsBox "> images </div>
                </div>
                <div className="col-sm-12">
                    <p className="paragraph_Txt"> Buyers from federal, state and local governments, the military and educational institutions will find Overstock Professional ready to be your company of choice. Our dedicated Government Solutions team available procurement contracts and national retail network mean we can tap into an unparalleled supply chain to offer a total solution to your needs.
                        </p>
                </div>

                <div className="col-sm-6 ">
                    <ol className="listtype">
                        <li>■ COMPETITIVE PRODUCT PRICING </li>
                        <li>■ DEDICATED NATIONAL SUPPORT TEAM & 2,200 + LOCATIONS
                        </li>
                        <p className="spaceBuy"> There's no cost to participate and no minimum spending requirement to access: </p>
                        <li className="spacePoints">• Expansive order and delivery options on over 300,000 products </li>
                        <li className="spacePoints">• Volume Pricing Program and special discounts on purchases across the store </li>
                        <li className="spacePoints">• Convenient payment options - purchase orders and procurement cards accepted </li>
                        <li className="spacePoints">• One-step tax exemption registration with email renewal reminders </li>

                    </ol>
                </div>
                <div className="col-sm-6">
                    <ol className="listtype">
                        <li>■ LOW-COST AND RETURN OPTIONS</li>
                        <li>■ CONVENIENT PAYMENT OPTIONS</li>
                        <p className="spaceBuy">U.S. Communities is a government cooperative purchasing program that combines and strengthens the purchasing power of public entities nationwide. The result is reduced cost and the assurance that your agency meets the requirements for competitive solicitation.</p>
                        <p>Together we enable</p>
                        <li>• Reduced procurement costs on Maintenance, Repair and Operations supplies</li>
                        <li>• Purchasing without the need for RFPs</li>
                        <li>• Compliance with competitive solicitation requirements</li>
                        <li>• Access to general contractors through the Renovation Services and Installation Services programs
                        </li>
                        <li>• Ordering through the U.S. Communities Marketplace</li>

                    </ol>
                </div>
               
                <div className="col-sm-12">
                    <p className="paragraph_Txt">
                        *Participating public agencies with annual net purchases of $10,000-$25,000 are eligible for a 1% rebate; with annual net purchases of $25,000-$100,000, a 2% rebate; and with annual net purchases over $100,000, a 5% rebate. Rebate period is January 1-December 31. Rebate checks are issued 60 days after the rebate period ends. $2,500 minimum order required for volume pricing. See an Associate for details and exclusions. ©2015 Homer TLC, Inc. All rights reserved.
                    </p>
                </div>
        </div>

        
        <div className="row ">
            <div className="col-sm-12 federal">
                <h2 className="taxpara"><b>SUPPORTING OUR FEDERAL CUSTOMERS</b></h2>
            </div>
            <div className="col-sm-12">
                <p className="paragraph_Txt">Federal Dollars Go Farther at Overstock Professional At Overstock Professional We've made it easy for federal government buyers to get in and out quickly by offering automatic tax exemptions on all federal government purchase card transactions - both in stores and on homedepot.com. We also accept federal government purchase orders with appropriate approvals.</p>
            </div>
            <div className="col-sm-12 "> <div className="ProfBenefitsBox "> images </div> </div>
        </div>
           

            {/* santha code ends */} {/* ram code */}

        <div className="row">

            <div className="simplifyTax">
                <h2 className="taxpara"><b> SIMPLIFYING TAX EXEMPTION</b></h2>
                <p className="paragraph_Txt"> With our one-step tax exempt registration, tax exempt customers,including buyers for state and local governments or state-defined exempt organizations,retailers,resellers and manufacturers in longer have to complete the instore paperwork with every exempt transaction.</p>
            </div>

            <div className="keyfeatures1 simplyTaxWrap">
                <figure className="col-xs-12 col-sm-4 ">
                    <div className="boxOutsdeWrap">
                        <span className="box1">icon </span>
                        <figcaption>Key Features </figcaption>
                    </div>
                </figure>
                <figure className="col-xs-12 col-sm-4 ">
                    <div className="boxOutsdeWrap">
                        <span className="box1">icon </span>
                        <figcaption>Key Features </figcaption>
                    </div>
                </figure>
                <figure className="col-xs-12 col-sm-4 ">
                    <div className="boxOutsdeWrap">
                        <span className="box1">icon </span>
                        <figcaption>Key Features </figcaption>
                    </div>
                </figure>
            </div>

        </div>

        <div className="row signuptextwrap">  
            <div className="col-sm-12">
                <Button type="submit" className="navigatebutton" onClick={this.scrollToTop}>Sign Up </Button>
            </div>
        </div>
        

        <div className="row ProfBenefitsBase" id="corporate">
            <div className="col-md-12">
                <h3 className="corppara"><b> Corporate Benefits </b>(overview & educational)</h3>
                <div className="col-sm-12">
                    <p className="paragraph_Txt">Buyers from federal, state and local governments, the military and educational institutions will find The Home Depot ready to be your company of choice. Our dedicated Government Solutions team is available for procurement contracts, and national retail network allows us to tap into an unparalleled supply chain to offer a total solution to your needs.</p>
                </div>
                
            </div>
        </div>


        <div className="row">
            <div className="container keypointsBase">
                <div className="col-sm-12 col-md-12">
                    <div className="ProfBenefitsBox"> image </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="ProfBenefitsBox"> <h3>Education Use Case Content</h3></div>
                    <p className="paragraph_Txt">Buyers from federal, state and local governments, the military and educational institutions will find The Home Depot ready to be your company of choice. Our dedicated Government Solutions team is available for procurement contracts, and national retail network allows us to tap into an unparalleled supply chain to offer a total solution to your needs. </p>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="ProfBenefitsBox"> <h3>Contractor Use Case Content</h3></div>
                    <p className="paragraph_Txt">Buyers from federal, state and local governments, the military and educational institutions will find The Home Depot ready to be your company of choice. Our dedicated Government Solutions team is available for procurement contracts, and national retail network allows us to tap into an unparalleled supply chain to offer a total solution to your needs.</p>
                </div>
            </div>
        </div>


        <div className="row signuptextwrap">  
            <div className="col-sm-12">
                <Button type="submit" className="navigatebutton" onClick={this.scrollToTop}>Sign Up </Button>
            </div>
        </div>

        <div className="row justrighttext" id="small">
            <div className="col-sm-12">
                <p className="rightwrap"> <b> Just Right for Your Small Business </b>(Overview & educational) </p>
                <p>Buyers from federal, state and local governments, the military and educational institutions will find The Home Depot ready to be your company of choice. Our dedicated Government Solutions team is available for procurement contracts, and national retail network allows us to tap into an unparalleled supply chain to offer a total solution to your needs.</p>
            </div>
        </div>

        <div className="row">

            <div className="col-sm-12 col-md-6">
            <div className="justrightbox">
                <h3 style={{ "textAlign": 'center', "paddingTop": '60px', "fontSize": '20px'}}>Designer Use Case Content</h3>
            </div>
            </div>

            <div className="col-sm-12 col-md-6">
            <div className="justrightbox">
                <h3 style={{ "textAlign": 'center', "paddingTop": '60px', "fontSize": '20px'}}>Hospitality Use Case Content</h3>
            </div>
            </div>

            <div className="col-sm-12 col-md-6">
            <div className="justrightbox">
                <h3 style={{ "textAlign": 'center', "paddingTop": '60px', "fontSize": '20px'}}>Hospitality Use Case Content</h3>
            </div>
            </div>

            <div className="col-sm-12 col-md-6">
            <div className="justrightbox">
                <h3 style={{ "textAlign": 'center', "paddingTop": '60px', "fontSize": '20px'}}>Designer Use Case Content</h3>
            </div>
            </div>

            <div className="col-sm-12 col-md-6">
            <div className="justrightbox">
                <h3 style={{ "textAlign": 'center', "paddingTop": '60px', "fontSize": '20px'}}>Dealership Use Case Content</h3>
            </div>
            </div>

            <div className="col-sm-12 col-md-6">
            <div className="justrightbox">
                <h3 style={{ "textAlign": 'center', "paddingTop": '60px', "fontSize": '20px'}}>SBO Use Case Content</h3>
            </div>
            </div>

        </div>

        <div className="row justifyContent" id="small">
            <div className="col-sm-12">
                <p>Buyers from federal, state and local governments, the military and educational institutions will find The Home Depot ready to be your company of choice. Our dedicated Government Solutions team is available for procurement contracts, and national retail network allows us to tap into an unparalleled supply chain to offer a total solution to your needs.</p>
            </div>
        </div>

        <div className="row signuptextwrap">  
            <div className="col-sm-12">
                <Button type="submit" className="navigatebutton" onClick={this.scrollToTop}>Sign Up </Button>
            </div>
        </div>
        
           
    </div>

    <ShopSocial />
    </div>

            
    )
}

}

export default FooterDetail;