/* *******************************************************************************
* name:     absentee_layout.txt
* purpose:  Information related to civilian, overseas, and militry absentee ballot 
*           requests and early voting ballots. Detailed absentee ballot 
*           information is confidential until ballot is returned. Before early 
*           voting begins, only returned mail-in ballots are included. Between the 
*           start of early voting and election day, include all early voting 
*           ballots cast as well. Starting on election day include all mailed and 
*           early voting ballots.
* updated:  01/27/2024
* format:   comma delimited
******************************************************************************* */

PARTIES:
- CONSTITUTION
- DEMOCRATIC
- GREEN
- LIBERTARIAN
- NO LABELS
- REPUBLICAN
- UNAFFILIATED
- WE THE PEOPLE

------------------------------------------------------------------------------------
name                            data type       description
------------------------------------------------------------------------------------
county_desc                     char(20)        County name/description
voter_reg_num                   char(12)        Voter registration number (unique to county)
ncid                            char(12)        NC identification number  (added: 01/23/2015)
voter_last_name                 char(30)        Last name of registered voter
voter_first_name                char(60)        First name 
voter_middle_name               char(20)        Middle name
race                            char(60)        Race
ethnicity                       char(3)         Ethnicity  (added: 03/27/2020)
gender                          char(60)        Gender/sex
age                             char(3)         Age
REMOVED-application_num         char(20)        Application number (added: 01/10/2020; removed 10/08/2020)
voter_street_address            char(75)        Street address
voter_city                      char(60)        City        
voter_state                     char(2)         State
voter_zip                       char(9)         Zip code
ballot_mail_street_address      char(75)        Ballot mailed street address
ballot_mail_city                char(60)        Ballot mailed city
ballot_mail_state               char(2)         Ballot mailed state
ballot_mail_zip                 char(9)         Ballot mailed zip code
other_mail_addr1                char(75)        Other street address of registered voter
other_mail_addr2                char(75)        Other street address - second line
other_city_state_zip            char(60)        Other address city, state, and zip code
relative_request_name           char(75)        Full name of relative requesting ballot (added: 01/10/2020)
relative_request_address        char(75)        Street address of relative requesting ballot (added: 01/10/2020)
relative_request_city           char(60)        City of relative requesting ballot (added: 01/10/2020)
relative_request_state          char(2)         State of relative requesting ballot (added: 01/10/2020)
relative_request_zip            char(9)         Zip code of relative requesting ballot (added: 01/10/2020)
election_dt                     char(10)        Election date
voter_party_code                char(3)         Party of registered voter
precinct_desc                   char(30)        Precinct name
cong_dist_desc                  char(30)        Congressional district name
nc_house_desc                   char(30)        NC House district name
nc_senate_desc                  char(30)        NC Senate district name
ballot_req_delivery_type        char(30)        Ballot delivery method type
ballot_req_type                 char(30)        Ballot request type
ballot_request_party            char(3)         Ballot request party
ballot_req_dt                   char(10)        Ballot request date
ballot_send_dt                  char(10)        Ballot send date
ballot_rtn_dt                   char(10)        Ballot return date
ballot_rtn_status               char(30)        Ballot return status
site_name                       char(100)       Site name  (added: 02/18/2014)
sdr                             char(3)         Same day registration indicator  (added: 11/11/2016)
mail_veri_status                char(20)        Mail verification status  (added: 11/11/2016)
-- ---------------------------------------------------------------------------------