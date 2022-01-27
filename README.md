# netty-otel-memory-leak
Test memory leak for Netty otel instrumentation 

Java version: 11
Open Telemetry agent version: 1.10.0

1. Insatall artillery
```brew install artillery```
2. Build maven project 
``` mvn clean install```
3. Run Netty application
```java -Dopentelemetry.enabled=true -Dotel.propagators=b3multi -Dotel.traces.exporter=otlp -javaagent:./opentelemetry-javaagent-all-1.10.0.jar -Xmx2g -jar ./target/netty-otel-memory-leak-1.0-SNAPSHOT-jar-with-dependencies.jar```
4. Run load by artillery:
```artillery run config.yml```
5. Wait for 1 hour

6. Get a heap dump by jconsole

7. Open the dump by Eclipse MAT