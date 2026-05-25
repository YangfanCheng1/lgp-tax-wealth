# ── Stage 1: Build with Maven ────────────────────────────────────────────────
FROM maven:3.9-eclipse-temurin-21-alpine AS builder
WORKDIR /app

# Cache dependencies before copying source
COPY pom.xml ./
RUN mvn dependency:go-offline -q

# Copy source and build
COPY src ./src
RUN mvn package -DskipTests -q

# ── Stage 2: Production runner (JRE only) ────────────────────────────────────
FROM eclipse-temurin:21-jre-alpine AS runner
WORKDIR /app

RUN addgroup -S spring && adduser -S spring -G spring

COPY --from=builder --chown=spring:spring \
     /app/target/taxwealth-0.0.1-SNAPSHOT.jar app.jar

USER spring
EXPOSE 8080

# Container-aware JVM: respect cgroup memory limits, use 75% for heap
ENTRYPOINT ["java", \
  "-XX:+UseContainerSupport", \
  "-XX:MaxRAMPercentage=75.0", \
  "-Djava.security.egd=file:/dev/./urandom", \
  "-jar", "app.jar"]
