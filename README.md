# sample node app
Sample node app for trying various openshift deployment strategies.

### S2I 
```oc new-app --name nodeapp https://github.com/gunjangarge/sample-node-app --context-dir source```

### Dockerfile
```oc new-app --name nodeapp https://github.com/gunjangarge/sample-node-app```

### Docker image
```oc new-app --name nodeapp quay.io/gunjangarge/sample-node-app:v1```
