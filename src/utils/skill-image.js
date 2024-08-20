
import appian from "assets/technology/appian.png";
import aws from "assets/technology/aws.png";
import azure from "assets/technology/azure.png";
import databricks from "assets/technology/databricks.png";
import erwin from "assets/technology/erwin.png";
import googleCloud from "assets/technology/gcp.png";
import informatica from "assets/technology/informatica.png";
import microstrategy from "assets/technology/microstrategy.png";
import mule from "assets/technology/mule.png";
import outsystems from "assets/technology/outsystems.png";
import powerBi from 'assets/technology/powerbi.png';
import snowflake from "assets/technology/snowflake.png";


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'appian':
      return appian;
    case 'databricks':
      return databricks;
    case 'erwin':
      return erwin;
    case 'informatica':
      return informatica;
    case 'power bi':
      return powerBi;
    case 'microstrategy':
      return microstrategy;
    case 'mule':
      return mule;
    case 'outsystems':
      return outsystems;
    case 'snowflake':
      return snowflake;
    case 'google cloud':
      return googleCloud;
    case 'azure':
      return azure;
    case 'aws':
      return aws;
    case 'Azure':
      return azure;
    default:
      break;
  }
}