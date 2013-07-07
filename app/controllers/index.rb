get '/' do
  erb :index
end

get '/search' do 
@results = Yummly.search(params[:q])
erb :results, {:layout => false}
end 
