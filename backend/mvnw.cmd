@REM Maven wrapper script for Windows
@ECHO off
SET MAVEN_PROJECTBASEDIR=%~dp0
SET MAVEN_WRAPPER_JAR=%MAVEN_PROJECTBASEDIR%\.mvn\wrapper\maven-wrapper.jar
SET MAVEN_WRAPPER_PROPERTIES=%MAVEN_PROJECTBASEDIR%\.mvn\wrapper\maven-wrapper.properties

IF NOT EXIST "%MAVEN_WRAPPER_JAR%" (
  FOR /F "tokens=2 delims==" %%A IN ('findstr wrapperUrl "%MAVEN_WRAPPER_PROPERTIES%"') DO SET WRAPPER_URL=%%A
  curl -o "%MAVEN_WRAPPER_JAR%" "%WRAPPER_URL%" -f -s
)

"%JAVA_HOME%\bin\java.exe" -jar "%MAVEN_WRAPPER_JAR%" %*
