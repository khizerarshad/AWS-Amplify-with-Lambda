import { Storage } from 'aws-amplify';

// Download the object from the S3 bucket and check the download count
async function downloadObject(bucket, key) {
  try {
    // Call the Lambda function to check the download count
    await Storage.get(key, {
      download: true,
      // Add the Lambda function as a download listener
      downloadCallback: 'checkDownloadCount',
      // Pass the S3 bucket and key as arguments to the Lambda function
      downloadOptions: {
        customArgs: {
          bucket,
          key,
        },
      },
    });
  } catch (error) {
    console.error(error);
  }
}

// Lambda function to check the download count and restrict access if necessary
function checkDownloadCount(progress, response) {
  if (response.status === 403) {
    // Display an error message if access is denied
    console.error(response.body);
    return;
  }

  if (progress.loaded === MAX_DOWNLOADS) {
    // Display a warning message if the maximum download count is reached
    console.warn('Maximum download count reached.');
    return;
    }
    }

// Download the object from the S3 bucket and check the download count
downloadObject('<bucket-name>', '<object-key>');
