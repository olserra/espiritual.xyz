import pinecone


def get_ids_from_query(index, input_vector, top_k=1000):
    results = index.query(vector=input_vector, top_k=top_k)
    ids = set()
    for result in results['matches']:
        ids.add(result['id'])
    return list(ids)


def delete_all(index):
    dimension = index.describe_index_stats()["dimension"]
    while True:
        ids = get_ids_from_query(index, [0]*dimension)
        if len(ids) == 0:
            break
        index.delete(ids=ids)


api_key = "61d74a44-e564-4a60-817f-36b2e26dc0df"
environment = "asia-southeast1-gcp-free"
index_name = "index-boostio-pipecone"

pinecone.init(api_key=api_key, environment=environment)
index = pinecone.Index(index_name)

delete_all(index)
