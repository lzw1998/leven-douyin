const path = require('path');
const fs = require('fs');

const moduleFileExtensions = ['js', 'ts', 'jsx', 'tsx'];
const appDirectory = fs.realpathSync(process.cwd());
const buildPath = process.env.BUILD_PATH || 'build';

const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
const resolveModule = (resolveFn, filePath) => {
  // 如果有moduleFileExtensions所包含的入口文件也可以进行目标路径的拼接
  const extension = moduleFileExtensions.find((ext) => fs.existsSync(resolveFn(`${filePath}.${ext}`)));
  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }
  return resolveFn(`${filePath}.js`);
};

module.exports = {
  appPath: resolveApp('.'),
  buildPath: resolveApp(buildPath),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveModule(resolveApp, 'src/index'),
  appPackageJson: resolveApp('package.json'),
  appNodeModules: resolveApp('node_modules'),
  appSrc: resolveApp('src'),
  appSrcComponents: resolveApp('src/components'),
  appSrcUtils: resolveApp('src/utils'),
  appTsConfig: resolveApp('tsconfig.json'),
};
