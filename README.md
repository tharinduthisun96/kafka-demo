# kafka-demo

docker-compose up -d
docker-compose down
docker exec -it broker bash
docker exec broker kafka-topics --bootstrap-server broker:9092 --create --replication-factor 1 --partitions 3 --topic employee-topic
