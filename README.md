# kafka-demo

docker-compose up -d <br />
docker-compose down <br />
docker exec -it broker bash <br />
docker exec broker kafka-topics --bootstrap-server broker:9092 --create --replication-factor 1 --partitions 3 --topic employee-topic
