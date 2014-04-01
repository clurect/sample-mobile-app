require "rubygems"
require "mongo"
require "time"

include Mongo

class SampleMongo


	def insert_tilly
		mongo_client = MongoClient.new("localhost", 27017);
		db = mongo_client['sample-app']
		collection = db['sample-data']
		collection.insert({'id'=>'prsn-001','name'=>'tilly', 'age'=>'22'});
	end
	def remove_tilly
		mongo_client = MongoClient.new("localhost", 27017);
		db = mongo_client['sample-app']
		collection = db['sample-data']
		collection.remove('id'=>'prsn-001');
	end
end