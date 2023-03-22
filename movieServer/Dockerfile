FROM openjdk:17-jdk-slim-buster

# Install curl
RUN apt-get update && apt-get install -y curl

# Install Maven
ENV MAVEN_VERSION=3.9.1
ENV MAVEN_HOME=/usr/share/maven
ENV PATH="${MAVEN_HOME}/bin:${PATH}"
RUN curl -fsSL https://archive.apache.org/dist/maven/maven-3/${MAVEN_VERSION}/binaries/apache-maven-${MAVEN_VERSION}-bin.tar.gz | tar xzf - -C /usr/share \
  && mv /usr/share/apache-maven-${MAVEN_VERSION} ${MAVEN_HOME} \
  && ln -s ${MAVEN_HOME}/bin/mvn /usr/bin/mvn

WORKDIR /app

# Copy the Maven project and build it
COPY pom.xml .
COPY src/ src/
RUN mvn package

# Copy the JAR file to a new name
COPY target/movies-0.0.1-SNAPSHOT.jar target/movies.jar

CMD ["java", "-jar", "target/movies.jar"]
