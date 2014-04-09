require "rubygems"
require "mongo"
require "time"

include Mongo

class SampleMongo


	def insert_tilly
		mongo_client = MongoClient.new("localhost", 27017);
		db = mongo_client['sample-app']
		collection = db['sample-data']
		collection.insert({'id'=>'prsn-001','name'=>'tilly', 'age'=>'22'})

		MongoClient.new("localhost", 27017)['sample-app']['sample-data'].insert({'id'=>'prsn-002','name'=>'billy', 'age'=>'22'})
	end
	def remove_tilly
		mongo_client = MongoClient.new("localhost", 27017);
		db = mongo_client['sample-app']
		collection = db['sample-data']
		collection.remove();
	end
end