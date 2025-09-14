# The Markup's "How We Counted What Meta Made From Ads After Violent News Events"

See the [repo README for The Markup story](https://github.com/the-markup/investigation-meta-political-violence-ads/tree/main).

### All files

The format of all 3 data files in this repository have the following columns in common:

| Column | Description |
| --- | --- |
| ad_archive_id | A unique ID for one ad, assigned by the Ad Library API |
| ad_creation_time | The date when someone created the ad |
| currency | The currency that the values in `min_spend` and `max_spend` are reported in |
| max_impressions | The upper limit of Meta's estimate of how many impressions the ad received |
| max_spend | The upper limit of Meta's estimate of how much money the advertiser paid for the ad |
| min_impressions | The lower limit of Meta's estimate of how many impressions the ad received |
| min_spend | The lower limit of Meta's estimate of how much money the advertiser paid for the ad |
| ad_url | A URL to display the ad in Meta's web interface to the Ad Library API |
| page_name | The name of the page that purchased the ad |
| page_id | A unique ID for the page that purchased the ad, assigned by the Ad Library API |

### Ads mentioning `israel`

The data format of [meta-ads-mentioning-israel-after-2015-09-11.csv](data/meta-ads-mentioning-israel-after-2015-09-11.csv) includes these additional columns:

| Column | Description |
| --- | --- |
| currency_original | The original currency that was used to purchase the ad. If the value is not `USD`, a currency conversion was performed to calculate the values in `min_spend` and `max_spend`. |
| max_spend_original | The upper limit of Meta's estimate of how much money the advertiser paid for the ad in the original currency |
| min_spend_original | The lower limit of Meta's estimate of how much money the advertiser paid for the ad in the original currency |