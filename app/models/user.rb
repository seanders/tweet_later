class User < ActiveRecord::Base
  has_many :tweets
  def tweet(time, status)
    tweet = self.tweets.create!(:status => status)
    TweetWorker.perform_in(time.to_i.minutes, tweet.id)
    # TweetWorker.perform_async(tweet.id)
  end
end
