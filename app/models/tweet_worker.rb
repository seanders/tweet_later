class TweetWorker
  include Sidekiq::Worker

  def perform(tweet_id)
    tweet = Tweet.find(tweet_id)
    user  = tweet.user

    @user = Twitter::Client.new(:oauth_token => user.oauth_token, :oauth_secret => user.oauth_secret)
    Thread.new{@user.update(tweet.status)}
    # set up Twitter OAuth client here
    # actually make API call
    # Note: this does not have access to controller/view helpers
    # You'll have to re-initialize everything inside here

  end

end