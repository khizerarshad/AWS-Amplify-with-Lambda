
5. Use Amplify's authentication and authorization features to restrict access to the object based on user roles and permissions.

```js
import { Auth } from 'aws-amplify';

async function downloadObject(bucket, key) {
  try {
    const user = await Auth.currentAuthenticatedUser();
    const { groups } = user.signInUserSession;

    // Allow premium users to download the object without restrictions
    if (groups && groups.includes('premium')) {
      await Storage.get(key, { download: true });
      return;
    }

    await Storage.get(key, {
      download: true,
      downloadCallback: 'checkDownloadCount',
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
